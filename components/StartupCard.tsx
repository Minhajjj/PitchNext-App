import { formatDate } from "@/lib/utils";
import { Eye, EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { Author, Startup } from "@/sanity.types";

// Keep the old type for backward compatibility if needed elsewhere
export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

// New type that matches what we actually get from queries
export type StartupQueryResult = {
  _id: string;
  title: string | null;
  slug: any | null;
  _createdAt: string;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  views: number | null;
  description: string | null;
  category: string | null;
  image: string | null;
};

const StartupCard = ({ post }: { post: StartupQueryResult }) => {
  const { _createdAt, views, author, title, category, description, image, _id } = post;

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
          {formatDate(_createdAt)}
        </p>

        <div className="flex gap-1.5" >
          <EyeIcon className='size-6 text-primary' />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-0.5">
        <div className="flex-1">

          <Link href={`/user/${author?._id}`} >
            <p className="text-16-medium ">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`} >
            <h3 className="text-26-semibold">
              {title}
            </h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" alt="User_Img" width={48} height={48} className="rounded-full"></Image>
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">
          {description && description.length > 100 ? `${description.slice(0, 100)}...` : description || 'No description available'}
        </p>

        <img src={image || "/placeholder.png"} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/query=${category?.toLowerCase() || ''}`}>
          <p className="text-16-medium">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Uncategorized'}
          </p>
        </Link>

        <button className="startup-card_btn asChild">
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </button>

      </div>
    </li>
  )
}

export default StartupCard