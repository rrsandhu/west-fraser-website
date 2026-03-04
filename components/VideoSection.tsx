export default function VideoSection() {
  return (
    <section style={{ lineHeight: 0, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
      >
        <source src="/West%20Fraser%20Website%20Video15.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
