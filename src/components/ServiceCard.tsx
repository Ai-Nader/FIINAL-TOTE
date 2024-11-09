import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from './Link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  link: string;
}

export function ServiceCard({ title, description, image, fallbackImage, link }: ServiceCardProps) {
  const [currentImage, setCurrentImage] = React.useState(image);

  const handleImageError = () => {
    if (currentImage !== fallbackImage) {
      setCurrentImage(fallbackImage);
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div 
        className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${currentImage})` }}
        onError={handleImageError}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <Link 
          href={link}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          Learn More
          <ArrowUpRight size={20} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}