import React from 'react';
import GradientText from './GradientText';
import { experiences } from '@/data/experiences';
import { cn } from '@/lib/utils';

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-background text-foreground p-4">
      <h2 className="text-5xl md:text-5xl font-extrabold text-center mb-12">
        <GradientText>Experiências</GradientText>
      </h2>

      <div className="relative max-w-3xl mx-auto pt-8">
        {/* Vertical line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-blue-aqua"></div>

        <div className="flex flex-col-reverse"> {/* Reverse to grow from bottom up */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Circle marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-blue-aqua z-10"></div>

              <div
                className={cn(
                  "flex items-center w-full",
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row" // Alternates content side on desktop
                )}
              >
                {/* Empty div for spacing on desktop, pushes content to the other side */}
                <div className="hidden md:block w-1/2"></div>

                <div
                  className={cn(
                    "w-full md:w-1/2 p-4 rounded-lg",
                    index % 2 === 0 ? "md:text-left md:pl-10" : "md:text-right md:pr-10", // Text alignment
                    "text-center md:text-left" // Default to center on mobile, left/right on desktop
                  )}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{exp.company}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{exp.description}</p>
                  <p className="text-base text-gray-500">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;