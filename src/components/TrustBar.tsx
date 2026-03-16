"use client";

export default function TrustBar() {
  const items = ["3 Businesses Helped", "100% Transparent", "24/7 AI Support"];

  return (
    <section
      className="py-4 border-b"
      style={{ background: "#13131A", borderColor: "rgba(240,238,233,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span
                className="font-sans font-medium text-sm tracking-wide"
                style={{ color: "rgba(240,238,233,0.5)" }}
              >
                {item}
              </span>
              {index < items.length - 1 && (
                <div
                  className="hidden md:block rounded-full"
                  style={{ width: "4px", height: "4px", background: "#F97316", opacity: 0.4 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
