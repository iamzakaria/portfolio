// components/CertificationCard.tsx

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  date: string;
  issuer: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function CertificationCard({
  title,
  description,
  date,
  issuer,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      {/* Certification Logo / Avatar */}
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={issuer} className="object-contain" />
          <AvatarFallback>{issuer[0]}</AvatarFallback>
        </Avatar>
      </div>

      {/* Certification Details */}
      <div className="flex flex-1 flex-col justify-start gap-1">
        {/* Issuer + Date */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-muted-foreground">{issuer}</h3>
          <time className="text-xs text-muted-foreground">{date}</time>
        </div>

        {/* Title */}
        <h2 className="font-semibold leading-none text-lg">{title}</h2>

        {/* Description */}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground mt-1 line-clamp-2 text-justify">
            {description}
          </span>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge variant="outline" className="flex gap-2">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}