import React from 'react';
import { Link } from "react-router-dom";
import GradientButton from './GradientButton';
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";
import blog7 from "../assets/blog/blog7.png";
import blog8 from "../assets/blog/blog8.png";

const ExtendedBlogSection = () => {
    const blogs = [
      {
        image: blog1,
        category: "NEWS",
        title: "StoryStream's Video Production Career Opportunities and Upcoming Event",
        author: "Michael Carter",
        date: "Aug 29, 2023",
        introduction: "StoryStream, your destination for visual storytelling, is excited to reveal two incredible opportunities that will spark your creative journey. Whether you're seeking a rewarding career in video production or eager to join us for an unforgettable event, we've got something special in store for you.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
    },
      {
        image: blog2,
        category: "TIPS & TRICKS",
        title: "Mastering the Art of Storytelling: The Power of Narrative in Video Production",
        author: "Michael Carter",
        date: "Oct 17, 2023",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
    },
      {
        image: blog3,
        category: "STORIES",
        title: "Lights, Camera, Action! Behind the Scenes of a Video Production",
        author: "John Davis",
        date: "Oct 16, 2023",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      },
      {
        image: blog4,
        category: "NEWS",
        title: "Unveiling StoryStream's Commitment to Sustainability: A Greener Approach to Video Production",
        author: "Sarah Wilson",
        date: "Nov 05, 2023",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      },
      {
        image: blog5,
        category: "NEWS",
        title: "NEWS Story Stream Gears Up for a Spectacular 2023: A Sneak Peek into Our Exciting Plans",
        author: "David Thompson",
        date: "Dec 12, 2023",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      },
      {
        image: blog6,
        category: "TIPS & TRICKS",
        title: "Video Marketing Magic: 10 Tips to Boost Your Brand's Succes",
        author: "Emma Roberts",
        date: "Jan 03, 2024",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      },
      {
        image: blog7,
        category: "STORIES",
        title: "From Script to Screen: The Journey of Crafting Compelling Video Stories",
        author: "James Anderson",
        date: "Jan 15, 2024",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      },
      {
        image: blog8,
        category: "TECHNOLOGY",
        title: "The Visual Revolution: Unveiling the Profound Importance of Video Content",
        author: "Lisa Chen",
        date: "Jan 20, 2024",
        introduction: "Storytelling is at the heart of every great video. This blog will delve into the significance of narrative in video production, exploring how it captivates audiences and leaves a lasting impact. Whether you're a filmmaker or a business looking to enhance your brand through video, this blog will inspire and educate.",
        primaryHeading: "Career Opportunities at StoryStream",
        "bulletPoint": "Introduce StoryStream as a hub of creativity and innovation, setting the stage for the upcoming career opportunities and event.",
        "contentSections": [
          {
            "title": "Career Opportunities",
            "content": "Highlight the various career opportunities in video production that StoryStream is offering, including roles in videography, editing, scriptwriting, and more."
          },
          {
            "title": "A Creative Journey",
            "content": "Share stories from StoryStream's talented team members who have embarked on their own creative journey within the company."
          },
          {
            "title": "Qualifications and Expectations",
            "content": "Discuss the qualifications, skills, and values that StoryStream is seeking in potential team members."
          },
          {
            "title": "Benefits and Company Culture",
            "content": "Describe the benefits of working with StoryStream, including a supportive and innovative work culture."
          },
          {
            "title": "Upcoming Event - 'StoryStream Showcase 2023'",
            "content": "Announce StoryStream's upcoming event, 'StoryStream Showcase 2023,' and highlight its date, location, and significance in the video production industry."
          },
          {
            "title": "Speaker Lineup and Workshops",
            "content": "Tease the event's exciting speaker lineup, workshops, and hands-on sessions that will be available for attendees."
          },
          {
            "title": "Interactive Experiences",
            "content": "Share details about how 'StoryStream Showcase 2023' will offer interactive experiences, where attendees can dive into the art of storytelling."
          },
          {
            "title": "Registration and Tickets",
            "content": "Provide information on how to register for the event and any ticket options available to attendees."
          },
          {
            "title": "Closing Invitation",
            "content": "Conclude with an enthusiastic invitation to both career-seekers and creative enthusiasts, encouraging them to explore the opportunities at StoryStream and join the upcoming 'StoryStream Showcase 2023' event."
          }
        ],
        conclusion: "StoryStream is not just a company; it's a dynamic community of creatives, innovators, and storytellers. Whether you're looking to embark on a rewarding video production career or eager to immerse yourself in the world of visual storytelling, we have something special for you. Join us for 'StoryStream Showcase 2023,' and let us be your guide to a world of endless creativity. The journey starts here, and we can't wait to have you on board. Unlock your creative future with StoryStream!"
      }
    
    ];
  
    return (
      <div className="bg-black w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
          
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog, index) => (
               <Link 
               to={`/blog/${index}`} 
               key={index}
               state={{ blog: blog,
                primaryHeading: blog.primaryHeading,
                conclusion: blog.conclusion,
                bulletPoint:blog.bulletPoint
              }}
             >
              <div 
                key={index} 
                className="bg-[#111111] rounded-3xl overflow-hidden group transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-72 sm:h-80 object-cover rounded-t-3xl transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:translate-y-[-5%] group-hover:grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-syne text-sm sm:text-base">
                        READ BLOG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 transition-colors duration-500 group-hover:bg-[#1a1a1a]">
                  <span className="text-[#E97F4E] text-sm font-semibold font-syne tracking-wider">
                    {blog.category}
                  </span>
                  <h3 className="text-white text-base sm:text-lg font-syne font-bold mt-2 mb-4 hover:text-[#E97F4E] cursor-pointer transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center font-syne text-gray-400 text-xs sm:text-sm">
                    <span className="mr-2">{blog.author}</span>
                    <span className="before:content-['•'] before:mx-2">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
  
         
        </div>
      </div>
    );
};

export default ExtendedBlogSection;