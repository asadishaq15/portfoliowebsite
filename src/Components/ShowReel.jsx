import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ScrollModel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const frameRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with environment
    sceneRef.current = new THREE.Scene();
    
    // Enhanced camera settings
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    // Enhanced renderer setup with physically correct lighting
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      physicallyCorrectLights: true,
      outputEncoding: THREE.sRGBEncoding,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 1.0,
      shadowMap: {
        enabled: true,
        type: THREE.PCFSoftShadowMap
      }
    });
    
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Camera position
    cameraRef.current.position.z = 5;

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(0, 1, 2);
    directionalLight1.castShadow = true;
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(-2, 0, -2);
    
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight3.position.set(2, -1, -1);

    // Add subtle colored rim lights
    const rimLight1 = new THREE.PointLight(0x2196f3, 0.5);
    rimLight1.position.set(-3, 2, -2);
    
    const rimLight2 = new THREE.PointLight(0xff9800, 0.5);
    rimLight2.position.set(3, 2, -2);

    sceneRef.current.add(
      ambientLight, 
      directionalLight1, 
      directionalLight2, 
      directionalLight3,
      rimLight1,
      rimLight2
    );

    // Environment map for realistic reflections
    const pmremGenerator = new THREE.PMREMGenerator(rendererRef.current);
    pmremGenerator.compileEquirectangularShader();

    // Load 3D Model with enhanced materials
    const loader = new GLTFLoader();
    loader.load('/assets/iphone 16 screen.glb', (gltf) => {
      if (modelRef.current) {
        sceneRef.current.remove(modelRef.current);
        modelRef.current.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }

      modelRef.current = gltf.scene;
      
      // Enhance materials
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            child.material.envMapIntensity = 1.5;
            child.material.needsUpdate = true;
            
            // Enhance metallic materials
            if (child.material.metalness) {
              child.material.metalness = 0.9;
              child.material.roughness = 0.1;
            }
          }
        }
      });

      sceneRef.current.add(modelRef.current);
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);
      
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 4 / maxDim;
      modelRef.current.scale.multiplyScalar(scale);

      modelRef.current.rotation.y = Math.PI;
    });

    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (sceneRef.current) {
        while(sceneRef.current.children.length > 0){ 
          const object = sceneRef.current.children[0];
          sceneRef.current.remove(object);
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        containerRef.current?.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (modelRef.current) {
        // Changed the rotation range from (Math.PI, -Math.PI/2) to (Math.PI, -Math.PI)
        // This will make the model rotate 360 degrees (full rotation)
        const targetRotation = THREE.MathUtils.lerp(Math.PI, -Math.PI, latest);
        modelRef.current.rotation.y = targetRotation;
      }
    });
  
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const modelScale = useTransform(scrollYProgress, [0, 0.7], [1.2, isMobile ? 1.5 : 3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.7 : 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, isMobile ? 0.8 : 0.7]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, isMobile ? 0.4 : 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 50 : 200]);
  const modelY = useTransform(scrollYProgress, [0, 0.7], [0, isMobile ? -50 : -100]);

  return (
    <div className={`relative ${isMobile ? 'min-h-screen' : 'min-h-[300vh]'} bg-black -top-4`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div 
          className="absolute top-12 md:top-0 left-0 right-0 w-full z-20"
          style={{ 
            y: textY,
            scale: textScale,
          }}
        >
          <motion.h1 
            className="text-white text-center"
            style={{ 
              opacity: textOpacity,
              fontFamily: '"Syne", "Syne Placeholder", sans-serif',
              fontSize: isMobile ? '4.2rem' : '12rem',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
            }}
          >
            SHOWREEL
          </motion.h1>
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center mt-16 md:mt-40"
          style={{ 
            scale: modelScale,
            y: modelY,
            zIndex: 30
          }}
        >
          <div 
            ref={containerRef}
            className={`
              relative
              w-full
              mx-auto
              px-4
              md:px-8
              ${isMobile ? 'aspect-[9/14] max-w-base' : 'aspect-video max-w-5xl'}
            `}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollModel;