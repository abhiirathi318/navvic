import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import { getPost, getPostBody, posts, postsByDate, formatDate } from "@/lib/blog";
import { getTool } from "@/lib/tools";
import { url, articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: url(`/blog/${post.slug}`),
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Body = getPostBody(slug);
  if (!Body) notFound();

  const tools = post.relatedTools.map((s) => getTool(s)).filter(Boolean);
  const more = post.relatedPosts
    .map((s) => getPost(s))
    .filter(Boolean)
    .slice(0, 2);
  const fallback = postsByDate()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);
  const keepReading = (more.length ? more : fallback) as NonNullable<ReturnType<typeof getPost>>[];

  return (
    <main className="overflow-x-hidden">
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.updated,
            author: post.author,
            keywords: post.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="relative pt-32">
        <div className="absolute inset-0 -z-10 h-96 bg-gradient-to-b from-foam-100 to-transparent dark:from-abyss-900" />
        <div className="absolute inset-0 -z-10 grid-texture opacity-50" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ocean-400"
          >
            <ArrowLeft size={16} /> All insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <span className="rounded-full bg-ocean-400/15 px-2.5 py-1 text-ocean-400">{post.category}</span>
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-muted">
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[var(--border)] py-4 text-sm text-muted">
            <span className="font-semibold text-[var(--text)]">{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readingTime} min read
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
          <Reveal>
            <div className="prose">
              <Body />
            </div>
          </Reveal>

          {/* author / disclaimer */}
          <p className="mt-12 rounded-2xl border border-[var(--border)] bg-surface/60 p-5 text-sm text-muted">
            Written by the <strong className="text-[var(--text)]">Navvic trade desk</strong>. This
            article is general guidance, not legal or customs advice — always confirm duty rates,
            permits and Incoterms wording against official sources and your customs broker before you
            file.
          </p>

          {/* related tools */}
          {tools.length > 0 && (
            <div className="mt-10 rounded-3xl border border-ocean-400/20 bg-gradient-to-br from-abyss-800 to-abyss-950 p-7 text-foam-100">
              <h2 className="font-display text-xl font-bold">Put this into practice — free</h2>
              <p className="mt-2 text-sm text-foam-200/80">
                The tools that pair with this guide. No sign-up, no cost.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {tools.map((t) => (
                  <Link
                    key={t!.slug}
                    href={t!.href}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold transition hover:border-ocean-300/50 hover:bg-white/10"
                  >
                    {t!.name}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
              <Link
                href="/#quote"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-400 to-ocean-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                Get a quote from our trade desk
                <ArrowUpRight size={16} />
              </Link>
            </div>
          )}
        </div>

        {/* keep reading */}
        {keepReading.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">Keep reading</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {keepReading.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </article>

      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
