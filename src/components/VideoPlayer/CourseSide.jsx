import React from 'react'

function CourseSide() {
  return (
    <aside class="fixed mt-28 inset-y-0 left-0 w-2xs overflow-y-auto border-r border-gray-950/10 group-data-sidebar-collapsed:hidden max-xl:hidden dark:border-white/10">
         <nav aria-label="Course" class="px-6 py-4">
            <div class="sticky top-4 flex h-6">
               <button type="button" class="relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                  <svg viewBox="0 0 16 14" fill="none" class="shrink-0 stroke-gray-950 dark:stroke-white h-3.5 shrink-0">
                     <path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H5.5M5.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V11.5C15.5 12.6046 14.6046 13.5 13.5 13.5H5.5M5.5 0.5V13.5"></path>
                  </svg>
               </button>
            </div>
            <div class="mt-3">
               <div class="max-xl:hidden space-y-8">
                  <div>
                     <h2 class="text-base/7 font-semibold text-pretty text-gray-950 sm:text-sm/6 dark:text-white">Orientation: Understanding Where You Are</h2>
                     <ul class="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/landscape-of-choice">The Landscape of Choice</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/paradox-of-agency">The Paradox of Agency</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/liberation-from-regret">Liberation from Regret</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/recognizing-patterns">Recognizing Patterns</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/values-and-goals">Values and Goals</a></li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="text-base/7 font-semibold text-pretty text-gray-950 sm:text-sm/6 dark:text-white">Direction: Choosing a Path</h2>
                     <ul class="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/mapping-causal-factors">Mapping the Causal Factors</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/reframing-uncertainty">Reframing Uncertainty as Agency</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/decision-paralysis">Overcoming Decision Paralysis</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/path-of-least-resistance">Perceiving the Path of Least Resistance</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/surrendering-outcome">Surrendering to the Outcome</a></li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="text-base/7 font-semibold text-pretty text-gray-950 sm:text-sm/6 dark:text-white">Navigation: Steering Through the Inevitable</h2>
                     <ul class="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/widening-field-of-view">Widening Your Field of View</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/dealing-with-coincidence">Dealing with Coincidence</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/forgiving-others">Forgiving Others</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/anxiety-messages">What Anxiety Is Trying to Tell You</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/maintaining-self">Maintaining a Sense of Self</a></li>
                     </ul>
                  </div>
                  <div>
                     <h2 class="text-base/7 font-semibold text-pretty text-gray-950 sm:text-sm/6 dark:text-white">Destination: Arriving Where You Must</h2>
                     <ul class="mt-4 flex flex-col gap-4 border-l border-gray-950/10 text-base/7 text-gray-700 sm:mt-3 sm:gap-3 sm:text-sm/6 dark:border-white/10 dark:text-gray-400">
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/reframing-achievement">Reframing Achievement and Failure</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/surrendering-to-success">Surrendering to Success</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/giving-credit">Giving Credit Where it's Due</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/unburden-accountability">Unburden Yourself from Accountability</a></li>
                        <li class="-ml-px flex border-l border-transparent pl-4 hover:text-gray-950 hover:not-has-aria-[current=page]:border-gray-400 dark:hover:text-white has-aria-[current=page]:border-gray-950 dark:has-aria-[current=page]:border-white"><a class="aria-[current=page]:font-medium aria-[current=page]:text-gray-950 dark:aria-[current=page]:text-white" href="/writing-autobiography">Exercise: Writing your autobiography</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </aside>
  )
}

export default CourseSide