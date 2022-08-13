DEPYLOMENT LINK (DEMO LINK) : https://tablescore.vercel.app/

Table score is a page through which you can make scores between two "Items". There are currently 6 items on the table and each item is compared to the next. For example, we have Item1, which must be compared with Item2,3,4,5,6, when that comparison is finished, then Item2 is compared with Item3,4,5,6 and so on until each Item is compared with each other. If Item1 is greater than Item2, then Item1 gets 1 point, while Item2 remains its previous value. If Item2 has more points than Item1, then Item2 moves one place higher than it. If it happens that two items have the same score, then one point is added to both items. The positions remain static, ie if Item6 was in the 6th place and gets a place above it, then Item6 will be in the 5th place, and the position will not be tied to it. (In case it was necessary to add that the position moves with the player in line 92 instead of <td>{i + 1}</td> add <td>{item.position}</td>).


【ＤＥＳＫＴＯＰ　ＶＩＥＷ】
![31a77862b57a43cc2005f1a970479a7c](https://user-images.githubusercontent.com/80320950/184510395-78cce451-b051-431f-8cec-6f2b687df7c9.png)
![c2b2b4aa24bffc3c8ad31dc767e4c3a6](https://user-images.githubusercontent.com/80320950/184510400-49ea091c-2f2b-4c9e-a871-43f4b6ebbb23.png)

【ＭＯＢＩＬＥ　ＶＩＥＷ】
![92156cb59b9c6f509cac264b215cff85](https://user-images.githubusercontent.com/80320950/184510699-afa5bbd2-20a3-4394-8cd7-94e4aeab3d28.png)
![ddefe157dfe6e097cf505c0e259f04c5](https://user-images.githubusercontent.com/80320950/184510706-b7ced867-2e9c-4544-bf1d-44eec13d6194.png)

