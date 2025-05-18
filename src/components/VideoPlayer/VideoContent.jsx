import React, { useRef, useState } from 'react'
import CourseSide from './CourseSide'
import { useParams } from 'react-router-dom';

function VideoContent() {
    const { courseTitle, contentSlug } = useParams();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    // Video data (could come from props or API)
    const videoData = {
      src: "https://assets.tailwindcss.com/templates/compass/landscape-of-choice.mp4",
      poster: "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-01.png"
    };
  
    const handlePlay = () => {
      setIsPlaying(true);
    };
  
    const handlePause = () => {
      setIsPlaying(false);
    };

  if (!courseTitle || !contentSlug) {
    return <div>Content not found</div>;
  }
    return (
        <div class="isolate">
            <div class="group">
                <div class="xl:not-group-data-sidebar-collapsed:ml-(--container-2xs)">
                    <div class="sticky top-16 z-10 bg-white/90 backdrop-blur-sm dark:bg-gray-950/90 flex items-center justify-between gap-x-8 px-4 py-4 sm:px-6">
                        <div class="flex min-w-0 shrink items-center gap-x-4">
                            <button type="button" class="xl:hidden relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                                <svg viewBox="0 0 16 14" fill="none" class="shrink-0 stroke-gray-950 dark:stroke-white h-3.5 shrink-0">
                                    <path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H5.5M5.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V11.5C15.5 12.6046 14.6046 13.5 13.5 13.5H5.5M5.5 0.5V13.5"></path>
                                </svg>
                            </button>
                            <div class="min-w-0">
                                <nav aria-label="Breadcrumb" class="flex items-center gap-x-2 text-sm/6"><a class="min-w-0 shrink-0 text-gray-950 dark:text-white" href="/">Compass</a><span class="text-gray-950/25 dark:text-white/25">/</span><span class="min-w-0 truncate text-gray-950 last:text-gray-600 dark:last:text-gray-400">Overview</span></nav>
                            </div>
                        </div>
                        <nav class="flex items-center">
                            <button type="button" class="lg:hidden relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 dark:fill-white h-4 shrink-0">
                                    <circle cx="8" cy="3" r="1"></circle>
                                    <circle cx="8" cy="8" r="1"></circle>
                                    <circle cx="8" cy="13" r="1"></circle>
                                </svg>
                            </button>
                            <div class="flex gap-x-6 text-sm/6 text-gray-950 max-lg:hidden dark:text-white">
                                <a href="/">Course</a><a href="/interviews">Interviews</a><a href="/resources">Resources</a>
                                <button class="inline-flex items-center gap-x-2 focus:not-data-focus:outline-none" id="headlessui-menu-button-«re»" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                    Account
                                    <svg viewBox="0 0 8 4" fill="none" class="stroke-gray-950 dark:stroke-white h-1 shrink-0">
                                        <path fill="none" d="M1 0.5L4 3.5L7 0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </nav>
                    </div>
                    <main class="px-4 sm:px-6 mt-3">
                        <div class="relative mx-auto max-w-7xl">
                        <div className="-mx-2 sm:-mx-4">
      <div 
        className={`group aspect-video w-full rounded-2xl bg-gray-950 dark:bg-gray-900 ${
          isPlaying ? 'data-playing' : ''
        }`}
        data-offscreen={isPlaying ? "true" : undefined}
      >
        <video
          id="video"
          ref={videoRef}
          src={videoData.src}
          poster={videoData.poster}
          preload="metadata"
          controls
          className={`
            aspect-video w-full rounded-2xl
            sm:group-data-offscreen:data-playing:fixed
            sm:group-data-offscreen:data-playing:right-4
            sm:group-data-offscreen:data-playing:bottom-4
            sm:group-data-offscreen:data-playing:z-10
            sm:group-data-offscreen:data-playing:max-w-md
            sm:group-data-offscreen:data-playing:rounded-xl
            sm:group-data-offscreen:data-playing:shadow-lg
          `}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
    </div>
                            <div class="flex max-w-4xl gap-x-10 py-10 sm:py-14 lg:max-w-5xl">
                                <div class="w-full flex-1">
                                    <div id="content" class="prose">
                                        <h1 id="the-landscape-of-choice">The Landscape of Choice</h1>
                                        <p>A practical map for navigating the illusion that you actually have any agency at all.</p>
                                        <h2 id="dismantling-the-illusion">Dismantling The Illusion</h2>
                                        <p>You wake up each morning under the charming delusion that you're about to make a series of choices. What to wear, what to eat, whether to call in sick or drag yourself to work. But you don't actually make choices - you merely observe the outcomes of a series of predetermined processes that have been set in motion long before you even opened your eyes.</p>
                                        <p>What if I told you that this comforting notion that you're the author of your life story, is an elaborate fiction your consciousness tells itself? Not in some abstract philosophical sense, but in a very literal, neurologically demonstrable way.</p>
                                        <p><img alt="Perceived Options" loading="lazy" width="2001" height="1366" decoding="async" data-nimg="1" class="dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.light.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.light.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.light.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} />
                                            <img alt="Perceived Options" loading="lazy" width="2001" height="1366" decoding="async" data-nimg="1" class="not-dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.dark.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.dark.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fperceived-options.dark.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} />
                                        </p>
                                        <h3 id="the-deterministic-reality">The Deterministic Reality</h3>
                                        <p>Consider a simple function that doubles a number:</p>
                                        <p>This function is deterministic which means it will always return the same output for the same input. If you pass in <code>2</code>, it will always return <code>4</code>. The output is entirely <em>determined</em> by the input.</p>
                                        <p>You are the same way. Your choices are simply the outputs of a complex function that takes in your genetic makeup, past experiences, and current circumstances as inputs. You will always produce the same output for the same input.</p>
                                        <p>The only reason you think you have a choice is because the function is so complex that you can't see all the inputs. In reality, it's many functions chained together, each one feeding into the next.</p>

                                        <p>This function is still deterministic but you can see how quickly the result becomes obfuscated when you chain together multiple functions. Now imagine this extrapolated out to your entire life - every single thing that has ever happened to you is an input to your decision-making process.</p>
                                        <p>That time you congratulated yourself for <em>choosing</em> the salad instead of the burger? That was the inevitable result of being bullied at school, your recent doctor's appointment, and the attractive woman at the next table. The illusion that you could have chosen differently is just your brain's charming way of maintaining its sense of importance.</p>
                                        <p>If you could run your life again from the beginning, every singe thing would happen the same way.</p>
                                        <h2 id="understanding-your-decision-space">Understanding Your Decision Space</h2>
                                        <p><img alt="Decision Landscape" loading="lazy" width="2000" height="1178" decoding="async" data-nimg="1" class="dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.light.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.light.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.light.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} />
                                            <img alt="Decision Landscape" loading="lazy" width="2000" height="1178" decoding="async" data-nimg="1" class="not-dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.dark.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.dark.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Fmaze.dark.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} /></p>
                                        <p>Your decisions are not the result of some grand, conscious deliberation. They are the product of a complex interplay of factors that you have no control over. In reality, your decisions are shaped by:</p>
                                        <ol>
                                            <li>
                                                <p><strong>Biological Imperatives</strong>: The genetic algorithms running in the background of your consciousness, quietly determining your preferences while letting you believe they're "choices".</p>
                                            </li>
                                            <li>
                                                <p><strong>Environmental Conditioning</strong>: The invisible hand of your upbringing, guiding you toward predetermined outcomes while maintaining the comforting illusion of deliberation.</p>
                                            </li>
                                            <li>
                                                <p><strong>Psychological Patterns</strong>: Those recurring thought loops you mistake for deliberation but are actually just your brain running the same subroutines it always has.</p>
                                            </li>
                                            <li>
                                                <p><strong>Social Pressures</strong>: The subtle (and not-so-subtle) ways other predetermined beings influence your predetermined outcomes.</p>
                                            </li>
                                            <li>
                                                <p><strong>Resource Constraints</strong>: The practical limitations that narrow your "choices" to the point of inevitability, while your consciousness maintains the charade of agency.</p>
                                            </li>
                                        </ol>
                                        <p>None of these factors were chosen by you. They were given, inherited, imposed, or developed through processes entirely outside your control. Yet here you are, proudly.taking credit for their outcomes.</p>
                                        <h2 id="the-myth-of-free-will">The Myth of Free Will</h2>
                                        <p><img alt="Neurological Proof" loading="lazy" width="2000" height="990" decoding="async" data-nimg="1" class="dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.light.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.light.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.light.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} /><img alt="Neurological Proof" loading="lazy" width="2000" height="990" decoding="async" data-nimg="1" class="not-dark:hidden" srcset="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.dark.png&amp;w=2048&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.dark.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fassets.tailwindcss.com%2Ftemplates%2Fcompass%2Flibet.dark.png&amp;w=3840&amp;q=75" style={{ color: 'transparent' }} /></p>
                                        <p>Your brain makes decisions before you are even aware of them. Neuroscience has repeatedly demonstrated that your conscious mind is merely informed of decisions after they've been made by unconscious processes. Your sense of having <em>chosen</em> is simply your consciousness creating a narrative to explain what already happened.</p>
                                        <p>It's like when you ask a child if they want to eat broccoli or ice cream. We know they'll say ice-cream, but we pretend to give them a choice. The child feels empowered, but in reality broccoli was never on the table. The same is true for you.</p>
                                        <h2 id="practical-implications">Practical Implications</h2>
                                        <h3 id="liberation-through-understanding">Liberation Through Understanding</h3>
                                        <p>When we finally accept that our decisions are predetermined by factors outside our control:</p>
                                        <ol>
                                            <li>
                                                <p><strong>Self-Blame Dissolves</strong>: That embarrassing email you sent? You couldn't have done otherwise. It was the inevitable result of your sleep deprivation, caffeine intake, and childhood insecurities.</p>
                                            </li>
                                            <li>
                                                <p><strong>Anxiety Reduces</strong>: Worried about making the right choice about that job offer? Don't be. You'll inevitably do whatever your predetermined nature dictates. The outcome was written long before you became aware of the question.</p>
                                            </li>
                                            <li>
                                                <p><strong>Compassion Increases</strong>: That person who wronged you? They were simply acting out their programming. Their actions were as inevitable as the orbit of planets. How can you be angry at physics?</p>
                                            </li>
                                            <li>
                                                <p><strong>Action Simplifies</strong>: Once you stop pretending you're in control, you can simply observe what you do with the curious detachment of a scientist watching an experiment unfold. "Oh look, I'm reaching for another cookie. How fascinating."</p>
                                            </li>
                                        </ol>
                                        <h3 id="moving-through-the-landscape">Moving Through the Landscape</h3>
                                        <p>Rather than exhausting yourself with the pretense of "making the right choice," you can:</p>
                                        <ul>
                                            <li>Observe your decision-making patterns with the clinical interest of an anthropologist studying a strange tribe.</li>
                                            <li>Understand your predetermined tendencies as you would understand the predictable behavior of any natural system.</li>
                                            <li>Accept your limitations and constraints as you would accept gravity.</li>
                                            <li>Move forward with the effortless grace of water flowing downhill.</li>
                                        </ul>
                                        <h2 id="the-path-forward">The Path Forward</h2>
                                        <h3 id="embracing-determinism">Embracing Determinism</h3>
                                        <p>Understanding the deterministic nature of decision-making doesn't mean giving up. It means:</p>
                                        <ul>
                                            <li>Accepting that your path was carved out by forces beyond your control long before you became aware of it.</li>
                                            <li>Releasing the exhausting burden of believing you're responsible for outcomes you never controlled.</li>
                                            <li>Observing your actions with the same detached curiosity you might have watching a documentary about someone else's life.</li>
                                            <li>Moving forward with the peaceful knowledge that whatever happens was always going to happen.</li>
                                        </ul>
                                        <h3 id="next-steps">Next Steps</h3>
                                        <p>In our next lesson, we'll explore "The Paradox of Agency" - how understanding your complete lack of free will can paradoxically lead to more effective action and greater peace of mind. Though of course, whether you continue this course was determined long before you clicked "enroll."</p>
                                        <p>Remember: You're not choosing to move forward—you're simply observing the inevitable unfolding of your predetermined path. Isn't that comforting? No? Well, your discomfort was predetermined too.</p>
                                    </div>
                                    <div class="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
                                        <div class="flow-root">
                                            <a class="-mx-3 -my-2 block rounded-xl px-3 py-2 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/paradox-of-agency">
                                                <p class="flex items-center gap-3 text-sm/7 text-gray-500">
                                                    Up next
                                                    <svg viewBox="0 0 5 8" fill="none" class="stroke-current h-2 shrink-0">
                                                        <path d="M1 7.5L4 4.5L1 1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </p>
                                                <p class="mt-3 text-base/7 font-medium text-gray-950 dark:text-white">The Paradox of Agency</p>
                                                <p class="text-sm/7 text-gray-700 dark:text-gray-400">Explore whether you're living your life or just reacting to everyone else's.</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="hidden w-66 lg:block">
                                    <nav class="sticky top-16">
                                        <h2 class="text-sm/6 font-semibold text-gray-950 dark:text-white">On this page</h2>
                                        <ul class="mt-3 flex flex-col gap-3 border-l border-gray-950/10 text-sm/6 text-gray-700 dark:border-white/10 dark:text-gray-400">
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#dismantling-the-illusion" class="block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white" aria-current="location">Dismantling The Illusion</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#the-deterministic-reality" class="pl-4 block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">The Deterministic Reality</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#understanding-your-decision-space" class="block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Understanding Your Decision Space</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#the-myth-of-free-will" class="block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">The Myth of Free Will</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#practical-implications" class="block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Practical Implications</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#liberation-through-understanding" class="pl-4 block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Liberation Through Understanding</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#moving-through-the-landscape" class="pl-4 block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Moving Through the Landscape</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#the-path-forward" class="block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">The Path Forward</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#embracing-determinism" class="pl-4 block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Embracing Determinism</a></li>
                                            <li class="-ml-px border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=location]:border-gray-400 dark:hover:text-white has-aria-[current=location]:border-gray-950 dark:has-aria-[current=location]:border-white"><a href="#next-steps" class="pl-4 block aria-[current=location]:font-medium aria-[current=location]:text-gray-950 dark:aria-[current=location]:text-white">Next Steps</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default VideoContent