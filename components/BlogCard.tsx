import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate, type BlogPost } from "@/lib/blog";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-surface p-6 transition-all hover:-translate-y-1.5 hover:border-ocean-400/40 hover:shadow-2xl hover:shadow-ocean-600/10 sm:p-7 ${
          featured ? "lg:p-9" : ""
        }`}
      >
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-ocean-400/10 blur-2xl" />

        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
          <span className="rounded-full bg-ocean-400/15 px-2.5 py-1 text-ocean-400">{post.category}</span>
          <span className="flex items-center gap-1 text-muted">
            <Clock size={13} /> {post.readingTime} min read
          </span>
        </div>

        <h3
          className={`font-display mt-4 font-extrabold tracking-tight ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="text-xs text-muted">
            <span className="font-semibold text-[var(--text)]">{post.author}</span>
            <span className="mx-1.5">·</span>
            {formatDate(post.date)}
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-ocean-400">
            Read
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
