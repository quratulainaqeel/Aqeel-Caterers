"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ServicesPreview.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServicesPreview() {
  return (
    <section className="section section-dark">
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--foreground)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontSize: "0.9rem",
          marginBottom: "1rem",
        }}
      >
        WHAT WE DO
      </span>

      <SectionHeading
        title="Our Services"
        subtitle="Exceptional catering for weddings, corporate events, private celebrations, and unforgettable occasions."
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "2rem" }}
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>

                <p className={styles.serviceDesc}>
                  {service.shortDesc}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  className="btn-outline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link href="/services" className="btn-primary">
          View All Services
        </Link>
      </div> */}
    </section>
  );
}

