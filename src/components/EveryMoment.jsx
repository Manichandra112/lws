import React from 'react';
import teaCoffeeImg from '../assets/usecase-tea-coffee.jpg';
import breakfastImg from '../assets/usecase-breakfast.jpg';
import workImg from '../assets/usecase-work.jpg';
import travelImg from '../assets/usecase-travel.jpg';
import giftingImg from '../assets/usecase-gifting.jpg';

export default function EveryMoment() {
  const moments = [
    {
      id: 'tea-coffee',
      title: 'Tea & Coffee',
      tag: 'Hot & Iced Brews',
      description: 'A simple touch of sweetness to your favourite drink.',
      image: teaCoffeeImg,
      alt: 'Drizzling pure LWS honey spoon into hot morning tea',
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      tag: 'Morning Ritual',
      description: 'Perfect with toast, yogurt, fruit, oats, and more.',
      image: breakfastImg,
      alt: 'Drizzling LWS honey spoon over fresh breakfast bowl with granola and berries',
    },
    {
      id: 'at-work',
      title: 'At Work',
      tag: 'Desk & Meetings',
      description: 'Keep a spoon nearby for an easy everyday sweetener.',
      image: workImg,
      alt: 'Professional using LWS honey spoon with insulated tumbler at modern office desk',
    },
    {
      id: 'travel',
      title: 'Travel',
      tag: 'Compact & Flight-Ready',
      description: 'Compact, convenient, and ready whenever you need it.',
      image: travelImg,
      alt: 'LWS honey spoons packed in handbag alongside passport and travel accessories',
    },
    {
      id: 'gifting',
      title: 'Gifting',
      tag: 'Hampers & Favours',
      description: 'A thoughtful addition to hampers and gift sets.',
      image: giftingImg,
      alt: 'Luxury gift box arranged with LWS honey spoons and golden ribbon',
    },
  ];

  return (
    <section className="every-moment-section section-padding" id="every-moment">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">Where to use LWS</span>
          <h2 className="section-title">
            MADE FOR EVERY <span className="italic-serif">MOMENT</span>
          </h2>
          <p className="every-moment-subtitle">
            A little sweetness, wherever life takes you.
          </p>
        </div>

        {/* 5 Equal Cards Flex/Grid */}
        <div className="moments-grid">
          {moments.map((moment) => (
            <div key={moment.id} className="moment-card">
              <div className="moment-image-wrap">
                <img
                  src={moment.image}
                  alt={moment.alt}
                  className="moment-img"
                  width="1024"
                  height="682"
                  loading="lazy"
                />
                <div className="moment-badge">
                  <span className="moment-badge-tag">{moment.tag}</span>
                </div>
              </div>

              <div className="moment-body">
                <h3 className="moment-title">{moment.title}</h3>
                <div className="moment-divider"></div>
                <p className="moment-desc">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
