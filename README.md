# React Challenge

The purpose of this application is to provide a customer feedback form that allows users to submit a review with their name, email address, star rating and a comment. This is then displayed underneath with the most recent reviews appearing at the top.

## Prerequistes

This application has been created using `react` and uses `HighCharts.js` to create a graphical representation of the user ratings.

## Dependencies/Running

- Install dependencies using `npm install`
- The application can be built using `npm run dev`

## Notable Features

- I am very pleased with the way I have implemented the star rating feature. I could have quite quickly added a drop down menu with options, but that isn't something that I thought would look particularly nice on the page or be a user friendly experience. I spent some time looking into how other websites present this option (Just Eat, Amazon, etc.) and came up with a plan to create my own version. I'm sure that in places it can be tidied and made more succinct, but as my first attempt at a star rating system I am pleased.
- While the styling is fairly minimal (see below section), I have been able to create a fairly responsive user experience that can handle being used on different devices.

## Unresolved Issues/Un-implemented Features

While I'm happy with the work that I am submitting, there is more that I would have liked to do given more time to work on the project:

- I have tried to implement some basic styling to make the product user friendly and have some level of intuition as to how to use certain features. However, given more time there is more I would have liked to do. For instance, have hidable/collapsable elements.
- The chart proved to be an interesting challenge. I'm happy with how it turned out, but there are small features that I would like to change with some extra time. For instance, the total axis give options for values with decimal places which can't happen in this use case, so I would like to change the distance between those points. I would like to spend a little more time working through the documentation and getting to know how the config is constructed to create more fully featured and controlable charts in the future.
- The charts also caused some issues when creating snapshots and testing elements. I was able to partially get around this by conditionally rendering the graph only if there are reviews, which I feel makes the user experience a bit friendlier as an empty graph on the page looked fairly cumbersome to me. For this reason, I do not have a snapshot for the `Chart.js` component. I'd like to dig a little deeper and find a solution for this.
- Features that may have been interesting to include are pagination on the reviews

## Acknowledgements

- Insipiration for the star rating system came from research not limited to but notably including Just-Eat, Amazon and Trip Advisor.
- `WhatFont?` and `Colorzilla` were used to get inspiration while researching and making decisions on CSS and font styles.
