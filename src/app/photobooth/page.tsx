'use client';
import Image from 'next/image';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import OpenInFull from '@mui/icons-material/OpenInFull';

export default function PhotoBoothInfoPage() {
  const templates = [
    { filename: '2x6option1', label: '2x6 Option 1' },
    { filename: '2x6option2', label: '2x6 Option 2' },
    { filename: '2x6option3', label: '2x6 Option 3' },
    { filename: '4x6option1', label: '4x6 Option 1' },
    { filename: '4x6option2', label: '4x6 Option 2' },
    { filename: '4x6option3', label: '4x6 Option 3' },
    { filename: '4x6option4', label: '4x6 Option 4' },
  ];

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [selectedBackdrop, setSelectedBackdrop] = useState<{
    src: string;
    alt: string;
    video: string;
  } | null>(null);

  // Dialog state for Photo Templates
  const [openTemplate, setOpenTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    filename: string;
    label: string;
  } | null>(null);

  // Dialog state for Customization
  const [openCustomization, setOpenCustomization] = useState(false);
  const [selectedCustomization, setSelectedCustomization] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const backdrops = [
    {
      src: '/photobooth/backdrops/black.jpg',
      alt: 'Black Backdrop',
      label: 'BLACK',
      video: '/photobooth/backdrops/black-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/silver.png',
      alt: 'Silver Backdrop',
      label: 'SILVER',
      video: '/photobooth/backdrops/silver-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/rosegold.jpg',
      alt: 'Rose Gold Backdrop',
      label: 'ROSE GOLD',
      video: '/photobooth/backdrops/rosegold-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/gold.jpg',
      alt: 'Gold Backdrop',
      label: 'GOLD',
      video: '/photobooth/backdrops/gold-slideshow.mp4',
    },
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Photo Booth Experience
        </h1>

        {/* Backdrops Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Backdrops</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {backdrops.map(({ src, alt, label, video }) => (
                <div
                  key={src}
                  onClick={() => {
                    setSelectedBackdrop({ src, alt, video });
                    setOpenBackdrop(true);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="relative">
                    <Image
                      src={src}
                      alt={alt}
                      width={150}
                      height={150}
                      className="mx-auto object-cover rounded"
                    />
                    <OpenInFull
                      fontSize="small"
                      className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                    />
                  </div>
                  <p className="mt-2 font-semibold">{label}</p>
                </div>
              ))}
              {/* <div>
                <Image
                  src="/photobooth/backdrops/white.png"
                  alt="White Backdrop"
                  width={150}
                  height={150}
                  className="mx-auto object-cover rounded"
                />
                <p className="mt-2 font-semibold">WHITE</p>
              </div> */}
              {/* <div>
                <Image
                  src="/photobooth/backdrops/flower.png"
                  alt="White Flower Backdrop"
                  width={150}
                  height={150}
                  className="mx-auto object-cover rounded"
                />
                <p className="mt-2 font-semibold">
                  WHITE FLOWER BACKDROP <br /> (WEDDINGS) EXTRA $30
                </p>
              </div> */}
            </div>
          </div>
          <Dialog
            open={openBackdrop}
            onClose={() => setOpenBackdrop(false)}
            maxWidth="md"
            fullWidth
          >
            <div style={{ padding: 20, textAlign: 'center' }}>
              {selectedBackdrop && (
                <>
                  <Image
                    src={selectedBackdrop.src}
                    alt={selectedBackdrop.alt}
                    width={500}
                    height={500}
                    style={{ objectFit: 'contain' }}
                  />
                  <video
                    controls
                    style={{ marginTop: 20, maxWidth: '100%' }}
                    src={selectedBackdrop.video}
                  />
                  {/* Placeholder for other images/videos */}
                  <div style={{ marginTop: 20 }}>
                    {/* Other images/videos placeholder */}
                  </div>
                </>
              )}
            </div>
          </Dialog>
        </section>

        {/* Photo Templates Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Photo Templates</h2>
            {/* 2x6 Templates */}
            <div className="mb-10">
              <div
                style={{
                  marginBottom: '20px',
                }}
              >
                <h3 className="text-xl font-semibold mb-4">2x6 Templates</h3>
                <h5>
                  Our most popular strip gives your guest a fun sized keep-safe
                  from your special day. Select from 2, 3 or 4 captures per
                  photo.
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                {templates
                  .filter(({ filename }) => filename.startsWith('2x6'))
                  .map(({ filename, label }) => (
                    <div
                      key={filename}
                      className="relative cursor-pointer"
                      onClick={() => {
                        setSelectedTemplate({ filename, label });
                        setOpenTemplate(true);
                      }}
                    >
                      <Image
                        src={`/photobooth/templates/${filename}.png`}
                        alt={label}
                        width={120}
                        height={180}
                        className="mx-auto object-contain rounded shadow"
                      />
                      <OpenInFull
                        fontSize="small"
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                      />
                      <p className="mt-4 font-semibold">{label}</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* 4x6 Templates */}
            <div>
              <div
                style={{
                  marginBottom: '20px',
                }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  4x6 Templates (Extra Cost)
                </h3>
                <h5>
                  The full size photo is a great option as well! Select from 1,
                  2, or 3 captures per photo
                </h5>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
                {templates
                  .filter(({ filename }) => filename.startsWith('4x6'))
                  .map(({ filename, label }) => (
                    <div
                      key={filename}
                      className="relative cursor-pointer"
                      onClick={() => {
                        setSelectedTemplate({ filename, label });
                        setOpenTemplate(true);
                      }}
                    >
                      <Image
                        src={`/photobooth/templates/${filename}.png`}
                        alt={label}
                        width={120}
                        height={180}
                        className="mx-auto object-contain rounded shadow"
                      />
                      <OpenInFull
                        fontSize="small"
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                      />
                      <p className="mt-4 font-semibold">{label}</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* Dialog for enlarged template */}
            <Dialog
              open={openTemplate}
              onClose={() => setOpenTemplate(false)}
              maxWidth="md"
            >
              <div style={{ padding: 20, textAlign: 'center' }}>
                {selectedTemplate && (
                  <Image
                    src={`/photobooth/templates/${selectedTemplate.filename}.png`}
                    alt={selectedTemplate.label}
                    width={400}
                    height={600}
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
            </Dialog>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Customization</h2>
            <p className="mb-4">
              Customize your photo templates with personalized text, logos, and
              colors to perfectly match your event branding or theme. Our design
              team works with you to create a unique look that your guests will
              love.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.from({ length: 9 }).map((_, idx) => {
                const n = idx + 1;
                return (
                  <div
                    key={n}
                    className="relative cursor-pointer"
                    onClick={() => {
                      setSelectedCustomization({
                        src: `/photobooth/customization/template${n}.png`,
                        alt: `Custom Template ${n}`,
                      });
                      setOpenCustomization(true);
                    }}
                  >
                    <Image
                      src={`/photobooth/customization/template${n}.png`}
                      alt={`Custom Template ${n}`}
                      width={150}
                      height={220}
                      className="object-cover rounded shadow"
                    />
                    <OpenInFull
                      fontSize="small"
                      className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                    />
                  </div>
                );
              })}
            </div>
            {/* Dialog for enlarged customization */}
            <Dialog
              open={openCustomization}
              onClose={() => setOpenCustomization(false)}
              maxWidth="md"
            >
              <div style={{ padding: 20, textAlign: 'center' }}>
                {selectedCustomization && (
                  <Image
                    src={selectedCustomization.src}
                    alt={selectedCustomization.alt}
                    width={400}
                    height={600}
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
            </Dialog>
          </div>
        </section>
      </section>
    </div>
  );
}
