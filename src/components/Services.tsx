import React from 'react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Automate with Make.com',
    description: 'Streamline your workflows with powerful Make.com integration templates designed for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
    fallbackImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=400',
    link: '/services/make'
  },
  {
    title: 'Unlock Productivity with Notion Templates',
    description: 'Transform your workspace with our custom-designed Notion templates for enhanced organization.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=400',
    fallbackImage: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800&h=400',
    link: '/services/notion'
  },
  {
    title: 'Automate Workflows with N8N Templates',
    description: 'Leverage N8N\'s powerful automation capabilities with our pre-built workflow templates.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=400',
    fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
    link: '/services/n8n'
  },
  {
    title: 'Revolutionize with RELIANCE AI Templates',
    description: 'Harness the power of AI with our RELIANCE templates for intelligent automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400',
    fallbackImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=400',
    link: '/services/reliance-ai'
  },
  {
    title: 'Tailored Automation Solutions',
    description: 'Custom-built automation solutions designed specifically for your unique business needs.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=400',
    fallbackImage: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800&h=400',
    link: '/services/custom'
  }
];

export function Services() {
  return (
    <section id="services-section" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}