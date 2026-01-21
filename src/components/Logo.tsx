// import Image from "next/image"; // Uncomment when logo image is added

interface LogoProps {
    readonly className?: string;
    readonly width?: number;
    readonly height?: number;
    readonly variant?: "light" | "dark" | "auto";
}

export default function Logo({
    className = "",
    // width = 200, // Uncomment when using Image component
    // height = 50, // Uncomment when using Image component
    // variant = "auto" // Reserved for future use with logo variants
}: LogoProps) {
    // For now, using a text-based logo. Replace with actual logo image when available.
    // Place your logo file in /public/logo.png or /public/logo.svg
    // Then uncomment the Image import and component below, and remove the text fallback

    return (
        <div className={`flex items-center ${className}`}>
            {/* Logo Image - Uncomment when logo file is available */}
            {/* 
      <Image
        src="/logo.png"
        alt="Tech4Services Logo"
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority
      />
      */}

            {/* Text-based logo fallback - Remove when actual logo is added */}
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech4Services
            </span>
        </div>
    );
}
