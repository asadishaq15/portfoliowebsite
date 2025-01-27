import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Youtube, Star, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const projectData = location.state?.project;

  React.useEffect(() => {
    if (!projectData) {
      navigate('/portfolio');
    }
  }, [projectData, navigate]);

  if (!projectData) return null;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Title Section */}
      <motion.div 
        className="container max-w-3xl mx-auto px-4 py-12"
        {...fadeIn}
      >
        <h1 className="text-6xl font-bold mb-16 mt-16 text-center">{projectData.title}</h1>
      </motion.div>

      {/* Video Container */}
      <motion.div className="container rounded-3xl mx-auto px-4 mb-16" {...fadeIn}>
        <div className="aspect-video bg-neutral-900 rounded-lg relative">
          <iframe
            src={projectData.videoUrl}
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            className="w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
    
          </div>
        </div>
      </motion.div>

      {/* Project Summary */}
      <motion.div className="container max-w-3xl mx-auto px-4 mb-16">
      <p className="text-lg text-white/80 mb-12 text-left">
        {projectData.description}
      </p>

      <div className="flex flex-col space-y-8">
        <div className="flex items-start">
          <div className="w-[1px] h-10 bg-orange-500 mr-6 mt-1"></div>
          <div>
            <p className="text-sm text-white/50 mb-1 font-light">[CLIENT]</p>
            <p className="text-xl font-light text-white">{projectData.client}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-[1px] h-10 bg-orange-500 mr-6 mt-1"></div>
          <div>
            <p className="text-sm text-white/50 mb-1 font-light">[YEAR]</p>
            <p className="text-xl font-light text-white">{projectData.year}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-[1px] h-10 bg-orange-500 mr-6 mt-1"></div>
          <div>
            <p className="text-sm text-white/50 mb-1 font-light">[SERVICES]</p>
            <p className="text-xl font-light text-white whitespace-pre-line">
              {projectData.services}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-[1px] h-10 bg-orange-500 mr-6 mt-1"></div>
          <div>
            <p className="text-sm text-white/50 mb-1 font-light">[CATEGORY]</p>
            <p className="text-xl font-light text-white">{projectData.category}</p>
          </div>
        </div>
      </div>
    </motion.div>

      {/* Hero Image */}
      {projectData.heroImage && (
        <motion.div 
          className="w-full h-[65vh] relative mb-16"
          {...fadeIn}
        >
          <img
            src={projectData.heroImage}
            alt="Project Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Project Scope */}
      <motion.div 
        className="container max-w-3xl mx-auto px-4 mb-16"
        {...fadeIn}
      >
        {projectData.projectScope && (
          <div className="flex flex-col items-left text-left mb-8">
            <h2 className="text-2xl font-bold mb-4">{projectData.projectScope.title}</h2>
            <p className="text-white/80">
              {projectData.projectScope.description}
            </p>
          </div>
        )}

        {/* Numbered Points */}
        {projectData.projectScope?.points && (
          <div className="mb-12">
            {projectData.projectScope.points.map((point, index) => (
              <motion.div 
                key={index} 
                className="mb-4 flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-4 text-white/50">{index + 1}.</span>
                <p className="text-white/80">{point}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Project Execution */}
        {projectData.execution && (
          <motion.div 
            className="mb-16 text-left"
            {...fadeIn}
          >
            <h2 className="text-2xl font-bold mb-8">{projectData.execution.title}</h2>
            {projectData.execution.sections?.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="list-disc list-inside">
                  {section.points?.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-white/80 mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

        {/* Production to Distribution Sections */}
        {['production', 'postProduction', 'distribution'].map((section) => (
          projectData[section] && (
            <motion.div 
              key={section}
              className="mb-16 text-left"
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold mb-8">{projectData[section].title}</h2>
              <ul className="list-disc list-inside">
                {projectData[section].points?.map((point, index) => (
                  <li key={index} className="text-white/80 mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        ))}

        {/* Project Outcome Section */}
        <motion.div className="mb-16 text-left" {...fadeIn}>
          <h2 className="text-2xl font-bold mb-4">
            {projectData.projectOutcome.title}
          </h2>
          <p className="text-white/80 mb-8">
            {projectData.projectOutcome.description}
          </p>

          <ul className="space-y-4">
            {projectData.projectOutcome.outcomes?.map((outcome, index) => (
              <motion.li
                key={index}
                className="text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-bold text-white">{outcome.title}:</span>{" "}
                {outcome.description}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {projectData.closingText && (
          <motion.div 
            className="mb-16 text-left"
            {...fadeIn}
          >
            <p className="text-xl text-white/80 italic">
              {projectData.closingText}
            </p>
          </motion.div>
        )}

        {/* Project Images Section */}
        {projectData.projectImages && (
  <motion.div 
    className="mb-16"
    {...fadeIn}
  >
    <h2 className="text-4xl font-bold mb-8 text-center">Project Gallery</h2>
    <div className="grid grid-cols-1 gap-2">
      {projectData.projectImages.map((image, index) => (
        <motion.div 
          key={index}
          className="relative overflow-hidden rounded-lg w-full h-[65vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
)}

        {/* Testimonial Section */}
        {projectData.testimonial && (
          <motion.div 
            className="mb-16 bg-neutral-900 p-12 rounded-2xl"
            {...fadeIn}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(projectData.testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index}
                    className="w-6 h-6 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <blockquote className="text-2xl font-light leading-relaxed mb-8 italic">
                "{projectData.testimonial.text}"
              </blockquote>

              <div className="text-sm text-white/70 uppercase tracking-wider">
                <p className="font-bold">{projectData.testimonial.author}</p>
                <p>{projectData.testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;