import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogposts() {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className="mx-auto mb-12 text-center section-title">Blog Posts</h2>
        <p className="mx-auto text-lg text-center subtitle text-muted-foreground">My latest blog posts</p>
        <div className='flex flex-col gap-4 xl:flex-row'>
          
          { /* 1 */ }
          <div className='flex-grow xl:max-w-[33%] border rounded-lg'>
            <div className='flex flex-col'>
              <div className='overflow-hidden'>
                <Image className='rounded-t-lg' src="/blog/JavaScript-vs-TypeScript.jpg" alt="" width={500} height={150} />
              </div>
              <div className='p-4'>
                <p>
                This post will discusses the advantages of using TypeScript in web development projects, such as improved code maintainability, enhanced developer productivity, and better code quality.
                </p>
              </div>
              <div className='p-4'>
                <p>
                  <Link href="/Posts/power_of_typescript" className='hover:text-primary hover:underline'>
                    Read More...
                  </Link>
                </p>
              </div>
            </div>
          </div>

          { /* 2 */ }
          <div className='flex-grow xl:max-w-[33%] border rounded-lg'>
            <div className='flex flex-col'>
              <div className='overflow-hidden'>
                <Image className='rounded-t-lg' src="/blog/reactcontextapi.jpeg" alt="" width={500} height={150} />
              </div>
              <div className='p-4'>
                <p>
                This post explains the React Context API and how it can be used to manage global state in React applications. It will include practical examples and best practices for implementation.
                </p>
              </div>
              <div className='p-4'>
              <p>
              <Link href="/Posts/understand_react_context_api" className='hover:text-primary hover:underline'>
                Read More...
              </Link>
            </p>
              </div>
            </div>
          </div>

          { /* 3 */ }
          <div className='flex-grow xl:max-w-[33%] border rounded-lg'>
            <div className='flex flex-col'>
              <div className='flex flex-col items-center justify-center h-[220px]'>
                <h3 className='text-xl font-bold'>Coming</h3>
                <h3 className='text-xl font-bold'>More</h3>
                <h3 className='text-xl font-bold'>Soon</h3>
              </div>
              <div className='p-4'>
                <p>
                More blog posts is coming soon. Be sure to check back here regularly to not miss anything.
                </p>
              </div>
              <div className='p-4'>
                <p></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blogposts