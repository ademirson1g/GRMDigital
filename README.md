![d119d37cf3c94bdff98a3f0e1059043d](https://user-images.githubusercontent.com/80320950/184511087-a5846136-c23f-4803-ba34-06281a8fdf11.png)

# Table Score Deployment Demo Link : https://tablescore.vercel.app/

[Table Score](https://tablescore.vercel.app/) is a page through which you can make scores between two "Items". The table score includes : 

- 🚀 **There are currently 6 items on the table and each item is compared to the next.For example, we have Item1, which must be compared with Item2,3,4,5,6, when that comparison is finished, then Item2 is compared with Item3,4,5,6 and so on until each Item is compared with each other.  
- 🔖 **If Item1 is greater than Item2, then Item1 gets 1 point, while Item2 remains its previous value. 
- 💧  **If Item2 has more points than Item1, then Item2 moves one place higher than it. 
- 💅 **If it happens that two items have the same score, then one point is added to both items.
- 💧  **The positions remain static, ie if Item6 was in the 6th place and gets a place above it, then Item6 will be in the 5th place, and the position will not be tied to it. (In case it was necessary to add that the position moves with the player in line 92 instead of <td>{i + 1}</td> add <td>{item.position}</td>).

## Technologies used

1. [**ReactJS:**](https://reactjs.org/) is a declarative, efficient, and flexible JavaScript library for building user interfaces."
2. [**Bootstrap:**](https://getbootstrap.com/) is a free, open source front-end development framework for the creation of websites and web apps..

## Getting started

In order to start this project, after cloning node modules needs to be installed : 

      npm install 🚀
      
Then the servers needs to be started and the website will work :

      npm start 🚀

## Desktop View
![31a77862b57a43cc2005f1a970479a7c](https://user-images.githubusercontent.com/80320950/184511283-97afafc9-970f-4a45-81fd-d3c7d6977026.png)
![c2b2b4aa24bffc3c8ad31dc767e4c3a6](https://user-images.githubusercontent.com/80320950/184511128-e28fa455-22e1-47a2-8c95-037dfab402cd.png)

## Mobile View
![92156cb59b9c6f509cac264b215cff85](https://user-images.githubusercontent.com/80320950/184511139-97e4e15f-a605-4325-b83b-ca745a02e1a7.png)
![ddefe157dfe6e097cf505c0e259f04c5](https://user-images.githubusercontent.com/80320950/184511144-6438ff94-43fb-4836-916b-5823772ca252.png)

