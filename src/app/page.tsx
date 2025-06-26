"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "./data/blogPost";
import { Search } from "lucide-react";
import Image from "next/image";
import BlogDialog from "@/components/custom-ui/BlogDialog";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";

function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const filteredPosts = blogPosts.filter(
    (post) =>
      searchQuery &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full py-20 lg:py-40 px-5 max-w-[1000px] mx-auto">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Latest articles
          </h4>
          <div className="relative">
            <Input
              placeholder="Search"
              className="md:max-w-[300px] bg-black/5"
              defaultValue={searchQuery || ""}
              onChange={(event) =>
                router.push(`?search=${encodeURIComponent(event.target.value)}`, {scroll: false})
              }
            />
            <Search
              size={20}
              className="absolute top-1/2 -translate-y-1/2 right-4 text-black/40"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {searchQuery && filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogDialog
                key={post.id}
                dialogTrigger={
                  <div
                    key={post.id}
                    className="flex flex-col gap-4 hover:opacity-75 cursor-pointer"
                  >
                    <div className="bg-muted rounded-md aspect-video overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Badge>{post.category}</Badge>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{post.author}</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="max-w-3xl text-2xl tracking-tight">
                        {post.title}
                      </h3>
                      <p className="max-w-3xl text-muted-foreground text-base">
                        {post.snippet}
                      </p>
                    </div>
                  </div>
                }
                post={post}
              />
            ))
          ) : (
            <Fragment>
              <BlogDialog
                dialogTrigger={
                  <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2">
                    <div className="bg-muted rounded-md aspect-video overflow-hidden relative">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <Badge>{featuredPost.category}</Badge>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <span>{featuredPost.author}</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="max-w-3xl text-4xl tracking-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="max-w-3xl text-muted-foreground text-base">
                        {featuredPost.snippet}
                      </p>
                    </div>
                  </div>
                }
                post={featuredPost}
              />

              {/* Other Posts */}
              {otherPosts.map((post) => (
                <BlogDialog
                  key={post.id}
                  dialogTrigger={
                    <div
                      key={post.id}
                      className="flex flex-col gap-4 hover:opacity-75 cursor-pointer"
                    >
                      <div className="bg-muted rounded-md aspect-video overflow-hidden relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          fill
                        />
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <Badge>{post.category}</Badge>
                        <p className="flex flex-row gap-2 text-sm items-center">
                          <span className="text-muted-foreground">By</span>{" "}
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author}</span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="max-w-3xl text-2xl tracking-tight">
                          {post.title}
                        </h3>
                        <p className="max-w-3xl text-muted-foreground text-base">
                          {post.snippet}
                        </p>
                      </div>
                    </div>
                  }
                  post={post}
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
