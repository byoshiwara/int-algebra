var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Intermediate Algebra is a textbook for students who have some acquaintance with the basic notions of variables and equations, negative numbers, and graphs, although we provide a \"Toolkit\" to help the reader refresh any skills that may have gotten a little rusty. In this book we journey farther into the subject, to explore a greater variety of topics including graphs and modeling, curve-fitting, variation, exponentials and logarithms, and the conic sections. We use technology to handle data and give some instructions for using a graphing calculator, but these can easily be adapted to any other graphing utility.  We discuss functions and their applications, but not in the detail expected of a precalculus course; our intended audience includes students preparing for the many fields that may not use calculus but nonetheless require facility with quantitative reasoning. We aim to develop that facility in the context of modeling and problem solving.   Each section of the text includes Examples followed by a similar Practice Exercise that students can try for themselves in WeBWorK.  There are also \"QuickCheck\" exercises, usually multiple choice or fill in the blanks, for students to check their understanding of the concepts presented.  Homework problems come in three groups: a short Skills Warm Up that reviews prerequisite skills for the section, then Skills Practice with new skills, and finally Applications.  We have included a variety of applied problems that we hope students (and their teachers) will find interesting.  In addition, each Chapter begins with an Investigation that can be used as a group project or as a guided in-class activity.  Chapter Reviews include a Glossary and a Summary of key concepts as well as Review Problems. There is an Activity booklet available that provides an interactive lesson for each section of the text. The Activities can be completed by students in groups or with guidance from the instructor; or they can be used as support for a lecture format.  Katherine Yoshiwara  Atascadero, CA 2020  "
},
{
  "id": "Slope",
  "level": "1",
  "url": "Slope.html",
  "type": "Section",
  "number": "1.1",
  "title": "Slope",
  "body": "Slope slope   The introduction to Chapter 1 discussed the rise in sea level over the last few decades. One of the contributing factors to this rise is the melting of Earth's glaciers.  Glaciers around the world are retreating at accelerating rates, and many lower-latitude mountain glaciers may soon disappear entirely. The meltwater from these smaller glaciers contributed as much as 40% to the total rise in sea level over the 1990s.  By measuring the change in ice and snow height at fixed points and multiplying by the surface area surface area of the glacier, scientists calculate the total volume volume of water lost from land-based glaciers. Dividing this volume by the surface area of the world's oceans gives the resulting change in sea level.  The graphs below show the change in thickness of the land-based glaciers overthe past 5 years, and the rise in sea level attributed to their melting. In this section we consider how to measure a rate of change.  graphs of change in glacier thickness and resulting rise in sea level   Rate of Change rate of change  The equation we use to describe a linear model, , gives the starting value of the variable and the rate at which changes. Now we will look more closely at rates and how they appear on the graph of the model. First, let's review the notion of a ratio used as a rate. You are already familiar with several types of rates.  Rate rate  A rate is a type of ratio that compares two quantities with different units.   QuickCheck 1 A ratio that compares two quantities with different units is called a .  In the examples below, notice that each rate has units of the form , which we read as \"something per something else.\"  Caryn bought 7 used paperback novels for a total of $2.45. Use a ratio to calculate the price per book.   The novels were priced at a rate of $0.35 per book.  For more help on using ratios and rates, see Section 1.4.1 of the Toolkit.  Practice 1 Delbert biked 34 miles in 5 hours. Use a ratio to calculate his average speed.  Delbert biked at a rate of . 6.8 miles per hour  The rate you calculated in Practice 1, Delbert's average speed, actually compares the change in two variables, his distance from his starting point, and the time elapsed. This type of rate appears often in linear models.  Rate of Change  A rate of change rate of change rate of change slope is a special kind of ratio that compares the change in two quantities or variables.  In the next Example we calculate speed as a rate of change, and we introduce a new notation, , to help with the calculation.  Gregor is driving across Montana. At 1 pm his trip odometer reads 189 miles, and at 4 pm it reads 360 miles. Calculate Gregor's average speed as a rate of change.  We have two variables: time, , and distance, , and the following data points:          Gregor's speed is the ratio of the distance he traveled to the time it took. The distance he traveled is the change in his odometer reading (from 189 miles to 360 miles), and the time it took is the change in the clock reading (from 1 pm to 4 pm).The units of this ratio are miles per hour.  In mathematics, we use the symbol Delta ( ) change in Delta (delta) for change in . Thus Gregor's average speed is the ratio , so   QuickCheck 2 What does the symbol stand for?   A triangle  Speed  Change in  Coordinate   Practice 2 Nelson is a long-distance truck driver. On a recent trip through the Midwest, he noted these odometer readings:   4 am  127 miles  10 am  421 miles   What was Nelson's average speed? 49 miles per hour   How do we see the rate of change on a graph? Let's consider the example above. The graph shows Gregor's distance, , at time . We plot the two data points, and , and draw a straight line joining them. We can illustrate and by vertical and horizontal line segments, as shown on the graph.  delta d and delta t on line  The rate of change of distance with respect to time, or speed, is the ratio of to . It measures how much changes for each unit increase in , or how far Gregor travels in each hour. This quantity, the ratio , is the slope of the line .  For more help calculating slope from a graph, see Section 1.4.2 of the Toolkit.  QuickCheck 3 What feature of a graph illustrates rate of change?   The -axis  Slope  Scales on the axes  The coordinate of a point    Review of Slope slope  You may have encountered the notion of slope in previous courses. Let us see how slope is related to rate of change.  Slope slope  The slope of a line is a rate of change that measures the steepness of the line.   The slope tells us how much the -coordinate changes for each unit of increase in the -coordinate, as we move from one point to another along the line.  QuickCheck 4 The slope of a line tells us how much the -coordinate changes   from one end of the graph to the other.  as we move up the -axis.  from one point to the next point.  for each unit of increase in the -coordinate.   Using the notation for \"change in,\" we define slope as follows.  Slope of a Line slope slope of a line   or, in symbols   In the definition of slope,   How does slope measure the steepness of a line? Study the three examples below and notice how changes for each 1 unit increase in .    line A  increases by 2 units    line B  increases by units    line C  decreases by 2 units    From these examples, we can make the following observations:  Slope and Steepness slope   For positive slopes, the larger the value of , the more the -value increases for each unit increase in , and the more we climb up as our location changes from left to right. (So graph A is steeper than graph B.) slope positive  If decreases as we move from left to right, then is negative when is positive, so their ratio (the slope) is negative. (See graph C.) slope positive     Compute the slope of the line.  Illustrate the slope on the graph by drawing a vertical segment of length and a horizontal segment of length .  If , what is the length of the vertical segment?   line with different scales on axes    The points and lie on the graph. As we move from the first point to the second point, increases by 20 units, so , and increases by 500 units, so . Thus   The segments are shown in the graph below.  line with different scales on axes   The slope is 25, which means that increases 25 units for each 1-unit increase in . So, if , then .   For more examples of calculating slope, see Section 1.4.2 of the Toolkit.  Practice 3   Compute the slope of the line.  Illustrate the slope on the graph by drawing a vertical segment for and a horizontal segment for .  If , what is the length of the vertical segment?   negative slope line with different scales on axes   negative slope line with different scales on axes     Interpreting Slope as a Rate  By putting together all of our discussion so far, we can now see that the slope of a line measures the rate of change of with respect to .  The graph shows the altitude, (in feet), of a skier minutes after getting on a ski lift.    Choose two points on the graph and compute the slope, including units.  Explain what the slope measures in this problem.  Write a linear model for in terms of .   altitude vs time   We choose the points and , as shown on the graph. Then  The slope gives the rate of change of altitude with respect to time. The skier rises at a rate of 150 feet per minute.  A linear model has the form From the graph, we see that at the skier's altitude was , and we calculated the rate of change of altitude as 150 feet per minute. Substituting these values into the formula, we find   Slope as a Rate of Change slope rate of change   The slope of a line measures the rate of change of with respect to .  The units of and can help us interpret the slope as a rate.    Practice 4 The graph shows the amount of garbage (in tons) that has been deposited at a dumpsite years after new regulations go into effect.    Choose two points on the graph and compute the slope, including units.  Explain what the slope measures in this problem.  Choose two different points and compute the slope again. Do you get the same value as before?   linear graph of garbage deposited  12.5 tons per year  The slope gives the rate at which garbage is accumulating.  The slope is the same using any two points on the line.    Lines Have Constant Slope  You have probably already noticed the following important fact about lines.  Lines Have Constant Slope  The slope of a line is constant: no matter which two points you pick to compute the slope, you will always get the same value.   For the line shown in the figure, try computing the slope using the points and , and then using the points and . In each case, you should find that the slope is .  Here is another way to look at slopes. If we start at any point on the line shown and move 9 units to the right, what value of will bring us back to the line? We can use the slope formula with .   line   You can use the graph to check this result for yourself; try starting at the point .  The fact that lines have constant slope has two important consequences. First because is constant for a given line, we can use the formula to find when we know , or to find when we know .  QuickCheck 5 What formula can we use to find when we know , or when we know ?   The equation of the line  The general linear formula  The slope formula    A wheelchair ramp can have a slope of no more than 24%, or 0.24. What horizontal distance is needed if the ramp must climb an elevation of 4 feet?   We first draw a sketch of the wheelchair ramp and label and . We are given that feet, and we are looking for . We substitute the known values into the slope formula, and solve for .  ramp  The wheelchair ramp must have a horizontal length of feet, or 16 feet 8 inches.   Practice 5 A wheelchair ramp can have a slope of no more than 24%, or 0.24. What height can the wheelchair ramp climb over a horizontal distance of 10 feet?  Hint: Do we know the value of or of ? 2.4 ft  Here is a second consequence of the fact that lines have constant slope: We can tell whether a collection of data points lies on a straight line by computing slopes. If the slopes between pairs of data points are all the same, the points lie on a straight line.  QuickCheck 6 How can we can tell whether a collection of data points lies on a straight line?   Plot them and look at the graph.  Calculate the slopes between points.  Find an equation for the line.  It depends on the scales on the axes.   Could this table represent a linear equation? Explain why or why not.                  We compute the slope between each consecutive pair of points. In each case Because the slope is the same for all pairs of points, the table could be linear.   Practice 6 Could this table represent a linear equation? Explain why or why not.    5  10  15  20  25   0  3  6  12  24   Hint: Calculate the slopes between points. No, the slope between points is not constant.  To summarize, here are two ways that we can use the slope to study a model.  Two Uses for Slope   If we know the slope of a line, we can use the formula to find when we know , or to find when we know .  To test whether a collection of data points lies on a straight line, we can compute slopes. If the slopes between all pairs of data points are the same, the points lie on a straight line.     Problem Set 1.4  Warm Up  Compute ratios to answer the questions in Problems 1 4.  Carl runs 100 meters in 10 seconds. Anthony runs 200 meters in 19.6 seconds. Who has the faster average speed? Anthony  On his 512-mile round trip to Las Vegas and back, Corey needed 16 gallons of gasoline. He used 13 gallons of gasoline on a 429-mile trip to Los Angeles. On which trip did he get better fuel economy?  Grimy Gulch Pass rises 0.6 miles over a horizontal distance of 26 miles. Bob's driveway rises 12 feet over a horizontal distance of 150 feet. Which is steeper? Bob's driveway  Which is steeper, the truck ramp for Acme Movers, which rises 4 feet over a horizontal distance of 9 feet, or a toy truck ramp, which rises 3 centimeters over a horizontal distance of 7 centimeters?   In Problems 5-8, compute the slope of the line through the indicated points. On both axes, one square represents one unit.   line on grid   line on grid   line on grid   line on grid    Skills Practice   Compute the slope of the line.  graph  Start at point and move 4 units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Start at point and move units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Suppose you start at any point on the line and move 18 units in the -direction. How many units must you move in the -direction to get back to the line? Use the equation to calculate your answer.      27   Compute the slope of the line.  graph  Start at point and move units in the -direction (down). How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Start at point and move 9 units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Suppose you start at any point on the line and move 24 units in the -direction. How many units must you move in the -direction to get back to the line? Use the equation to calculate your answer.   For Problems 11 14, compute the slope of the line. Note the scales on the axes.   four lines   four lines   four lines   four lines   For Problems 15 and 16,  Graph the line by the intercept method.  Use the intercepts to compute the slope.  Use the intercepts to illustrate the slope on each graph. Put arrows on and to indicate the direction of motion.   9x+12y=36     Residential staircaises are usually built with a slope of 70%, or . If the vertical distance between stories is 10 feet, how much horizontal space does the staircase require? 14.29 ft  A line has slope . Use the equation to find the horizontal or vertical change along the line.      For Problems 19 and 20, which tables represent variables that are related by a linear equation? (Hint: which relationships have constant slope?)                                          (a)                                             Applications  The population of Smallville grew from 7000 people in 1990 to 16,600 in 2002.   Use a rate of change to calculate the town's average rate of growth, in people per year. First, complete the table of values:              line  Illustrate and by line segments on the graph. (Note that the -axis is labeled in thousands.)  How much did the town grow each year?  Write a linear model for in terms of .   del x and del y  800    A traditional first experiment for chemistry students is to make 98 observations about a burning candle. Delbert records the height, , of the candle in inches at various times minutes after he lit it.                 Choose appropriate scales for the axes and plot the data. Do the points lie on a straight line?  Compute the slope of the graph, including units, and explain what the slope tells us about the candle.  Write a linear model for in terms of .   For Problems 23 and 24,  Choose two points and compute the slope, including units.  Write the slope as a rate of change, including units.  Illustrate the slope on the graph.  Write a linear model for the variables.   The graph shows the number of liters of emergency water remaining in a southern California household days after an earthquake.  line with positive intercepts  liters\/day  The water supply is decreasing at a rate of 6 liters per day.  line with changes in W and t    The graph shows the number of barrels of oil, , that have been pumped at a drill site days after a new drill is installed.  increasing graph   A spring is suspended from the ceiling. The table shows the length of the spring, in centimeters, as it is stretched by hanging various weights from it.            Weight, kg          Length, cm                  If you plot the data, will the points lie on a straight line? Why or why not?  Interpret the slope as a rate of change. Include units in your answer   Yes, the slope is 0.12  0.12 cm\/kg: The spring stretches an extra 0.12 cm for each additional 1 kg mass.   The table gives the radius and circumference of various circles, rounded to three decimal places.       4  25.133   6  37.699   10  62.832   15  94.248    If we plot the data, will the points lie on a straight line? Why or why not?  What familiar number does the slope turn out to be? (Hint: Recall a formula from geometry.) What does the slope tell us about circles?   Geologists calculate the speed of seismic waves by plotting the travel times for waves to reach seismometers at known distances from the epicenter. The speed of the wave can help them determine the nature of the material it passes through. The graph shows a travel time graph for P-waves from a shallow earthquake.  graph   Why do you think the graph is plotted with distance as the independent variable?  Use the graph to calculate the speed of the wave.   The distances to the stations are known.  5.7 km\/sec   Niagara Falls was discovered by Father Louis Hennepin in 1682. In 1952, much of the water of the Niagara River was diverted for hydroelectric power, but until that time erosion caused the Falls to recede upstream by 3 feet per year.  How far did the Falls recede from 1682 to 1952?  The Falls were formed about 12,000 years ago during the end of the last ice age. How far downstream from their current position were they then? (Give your answer in miles.)    Naismith’s Rule is used by runners and walkers to estimate journey times in hilly terrain. In 1892 Naismith wrote in the Scottish Mountaineering Club Journal that a person “in fair condition should allow for easy expeditions an hour for every three miles on the map, with an additional hour for every 2000 feet of ascent.” (Source: Scarf, 1998.)  According to Naismith, 1 unit of ascent requires the same travel time as how many units of horizontall travel? (This is called Naismith’s number.) Round your answer to one decimal place.  A walk in the Brecon Beacons in Wales covers 3.75 kilometers horizontally and climbs 582 meters. What is the equivalent flat distance?  If you can walk at a pace of 15 minutes per kilometer over flat ground, how long will the walk in the Brecon Beacons take you?   7.9  8.35 km  2 hrs 5 min   The graph shows the rise in sea level attributed to the melting of land-based glaciers from 1960 to 2003.  rise in sea level   The graph appears to be almost linear from 1992 to 2002. Read the graph to complete the table, then compute the slope of the graph over that time interval, including units. What does the slope mean in this situation?    Year  Sea level   1992    2002    What was the total change in sea level from land-based glaciers over the time period from 1960 to 2003?  Calculate the average rate of change of sea level from land-based glaciers from 1960 to 2003.  From 1960 to 2003, the land-based glaciers decreased in thickness by about 8 meters (or 0.008 km). The total area of those glaciers is 785,000 square kilometers. Calculate the total volume of water released by melting. (Hint: )  The surface area of the world’s oceans is 361.6 million square kilometers. When the meltwater from the land-based glaciers (that's the volume you calculated in part (d)) enters the oceans, how much will the sea level rise, in kilometers? Use the formula in part (d). Convert your answer to millimeters, and check your answer against your answer to part (b).     "
},
{
  "id": "Slope-4-4",
  "level": "2",
  "url": "Slope.html#Slope-4-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Rate.",
  "body": "Rate rate  A rate is a type of ratio that compares two quantities with different units.  "
},
{
  "id": "Slope-4-5",
  "level": "2",
  "url": "Slope.html#Slope-4-5",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "QuickCheck 1.",
  "body": "QuickCheck 1 A ratio that compares two quantities with different units is called a . "
},
{
  "id": "Slope-4-7",
  "level": "2",
  "url": "Slope.html#Slope-4-7",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "Caryn bought 7 used paperback novels for a total of $2.45. Use a ratio to calculate the price per book.   The novels were priced at a rate of $0.35 per book. "
},
{
  "id": "Slope-4-9",
  "level": "2",
  "url": "Slope.html#Slope-4-9",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "Practice 1.",
  "body": "Practice 1 Delbert biked 34 miles in 5 hours. Use a ratio to calculate his average speed.  Delbert biked at a rate of . 6.8 miles per hour "
},
{
  "id": "Slope-4-11",
  "level": "2",
  "url": "Slope.html#Slope-4-11",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Rate of Change.",
  "body": "Rate of Change  A rate of change rate of change rate of change slope is a special kind of ratio that compares the change in two quantities or variables. "
},
{
  "id": "Average-speed",
  "level": "2",
  "url": "Slope.html#Average-speed",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "Gregor is driving across Montana. At 1 pm his trip odometer reads 189 miles, and at 4 pm it reads 360 miles. Calculate Gregor's average speed as a rate of change.  We have two variables: time, , and distance, , and the following data points:          Gregor's speed is the ratio of the distance he traveled to the time it took. The distance he traveled is the change in his odometer reading (from 189 miles to 360 miles), and the time it took is the change in the clock reading (from 1 pm to 4 pm).The units of this ratio are miles per hour.  In mathematics, we use the symbol Delta ( ) change in Delta (delta) for change in . Thus Gregor's average speed is the ratio , so  "
},
{
  "id": "Slope-4-14",
  "level": "2",
  "url": "Slope.html#Slope-4-14",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "QuickCheck 2.",
  "body": "QuickCheck 2 What does the symbol stand for?   A triangle  Speed  Change in  Coordinate  "
},
{
  "id": "Slope-4-15",
  "level": "2",
  "url": "Slope.html#Slope-4-15",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "Practice 2.",
  "body": "Practice 2 Nelson is a long-distance truck driver. On a recent trip through the Midwest, he noted these odometer readings:   4 am  127 miles  10 am  421 miles   What was Nelson's average speed? 49 miles per hour "
},
{
  "id": "Slope-4-19",
  "level": "2",
  "url": "Slope.html#Slope-4-19",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "QuickCheck 3.",
  "body": "QuickCheck 3 What feature of a graph illustrates rate of change?   The -axis  Slope  Scales on the axes  The coordinate of a point  "
},
{
  "id": "Slope-5-4-3",
  "level": "2",
  "url": "Slope.html#Slope-5-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope "
},
{
  "id": "Slope-5-6",
  "level": "2",
  "url": "Slope.html#Slope-5-6",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "QuickCheck 4.",
  "body": "QuickCheck 4 The slope of a line tells us how much the -coordinate changes   from one end of the graph to the other.  as we move up the -axis.  from one point to the next point.  for each unit of increase in the -coordinate.  "
},
{
  "id": "Slope-5-8",
  "level": "2",
  "url": "Slope.html#Slope-5-8",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Slope of a Line.",
  "body": "Slope of a Line slope slope of a line   or, in symbols  "
},
{
  "id": "Slope-5-14",
  "level": "2",
  "url": "Slope.html#Slope-5-14",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Compute the slope of the line.  Illustrate the slope on the graph by drawing a vertical segment of length and a horizontal segment of length .  If , what is the length of the vertical segment?   line with different scales on axes    The points and lie on the graph. As we move from the first point to the second point, increases by 20 units, so , and increases by 500 units, so . Thus   The segments are shown in the graph below.  line with different scales on axes   The slope is 25, which means that increases 25 units for each 1-unit increase in . So, if , then .  "
},
{
  "id": "Slope-5-16",
  "level": "2",
  "url": "Slope.html#Slope-5-16",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "Practice 3.",
  "body": "Practice 3   Compute the slope of the line.  Illustrate the slope on the graph by drawing a vertical segment for and a horizontal segment for .  If , what is the length of the vertical segment?   negative slope line with different scales on axes   negative slope line with different scales on axes   "
},
{
  "id": "Slope-6-3",
  "level": "2",
  "url": "Slope.html#Slope-6-3",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "The graph shows the altitude, (in feet), of a skier minutes after getting on a ski lift.    Choose two points on the graph and compute the slope, including units.  Explain what the slope measures in this problem.  Write a linear model for in terms of .   altitude vs time   We choose the points and , as shown on the graph. Then  The slope gives the rate of change of altitude with respect to time. The skier rises at a rate of 150 feet per minute.  A linear model has the form From the graph, we see that at the skier's altitude was , and we calculated the rate of change of altitude as 150 feet per minute. Substituting these values into the formula, we find  "
},
{
  "id": "Slope-6-4-3",
  "level": "2",
  "url": "Slope.html#Slope-6-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate of change "
},
{
  "id": "Slope-6-5",
  "level": "2",
  "url": "Slope.html#Slope-6-5",
  "type": "Checkpoint",
  "number": "1.1.15",
  "title": "Practice 4.",
  "body": "Practice 4 The graph shows the amount of garbage (in tons) that has been deposited at a dumpsite years after new regulations go into effect.    Choose two points on the graph and compute the slope, including units.  Explain what the slope measures in this problem.  Choose two different points and compute the slope again. Do you get the same value as before?   linear graph of garbage deposited  12.5 tons per year  The slope gives the rate at which garbage is accumulating.  The slope is the same using any two points on the line.  "
},
{
  "id": "Slope-7-8",
  "level": "2",
  "url": "Slope.html#Slope-7-8",
  "type": "Checkpoint",
  "number": "1.1.16",
  "title": "QuickCheck 5.",
  "body": "QuickCheck 5 What formula can we use to find when we know , or when we know ?   The equation of the line  The general linear formula  The slope formula   "
},
{
  "id": "Slope-7-9",
  "level": "2",
  "url": "Slope.html#Slope-7-9",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": "A wheelchair ramp can have a slope of no more than 24%, or 0.24. What horizontal distance is needed if the ramp must climb an elevation of 4 feet?   We first draw a sketch of the wheelchair ramp and label and . We are given that feet, and we are looking for . We substitute the known values into the slope formula, and solve for .  ramp  The wheelchair ramp must have a horizontal length of feet, or 16 feet 8 inches.  "
},
{
  "id": "Slope-7-10",
  "level": "2",
  "url": "Slope.html#Slope-7-10",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "Practice 5.",
  "body": "Practice 5 A wheelchair ramp can have a slope of no more than 24%, or 0.24. What height can the wheelchair ramp climb over a horizontal distance of 10 feet?  Hint: Do we know the value of or of ? 2.4 ft "
},
{
  "id": "Slope-7-12",
  "level": "2",
  "url": "Slope.html#Slope-7-12",
  "type": "Checkpoint",
  "number": "1.1.19",
  "title": "QuickCheck 6.",
  "body": "QuickCheck 6 How can we can tell whether a collection of data points lies on a straight line?   Plot them and look at the graph.  Calculate the slopes between points.  Find an equation for the line.  It depends on the scales on the axes.  "
},
{
  "id": "Slope-7-13",
  "level": "2",
  "url": "Slope.html#Slope-7-13",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "Could this table represent a linear equation? Explain why or why not.                  We compute the slope between each consecutive pair of points. In each case Because the slope is the same for all pairs of points, the table could be linear.  "
},
{
  "id": "Slope-7-14",
  "level": "2",
  "url": "Slope.html#Slope-7-14",
  "type": "Checkpoint",
  "number": "1.1.21",
  "title": "Practice 6.",
  "body": "Practice 6 Could this table represent a linear equation? Explain why or why not.    5  10  15  20  25   0  3  6  12  24   Hint: Calculate the slopes between points. No, the slope between points is not constant. "
},
{
  "id": "section-1-4-exercises-2-2-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-2-2",
  "type": "Exercise",
  "number": "1.1.5.1",
  "title": "",
  "body": "Carl runs 100 meters in 10 seconds. Anthony runs 200 meters in 19.6 seconds. Who has the faster average speed? Anthony "
},
{
  "id": "section-1-4-exercises-2-2-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-2-3",
  "type": "Exercise",
  "number": "1.1.5.2",
  "title": "",
  "body": "On his 512-mile round trip to Las Vegas and back, Corey needed 16 gallons of gasoline. He used 13 gallons of gasoline on a 429-mile trip to Los Angeles. On which trip did he get better fuel economy? "
},
{
  "id": "section-1-4-exercises-2-2-4",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-2-4",
  "type": "Exercise",
  "number": "1.1.5.3",
  "title": "",
  "body": "Grimy Gulch Pass rises 0.6 miles over a horizontal distance of 26 miles. Bob's driveway rises 12 feet over a horizontal distance of 150 feet. Which is steeper? Bob's driveway "
},
{
  "id": "section-1-4-exercises-2-2-5",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-2-5",
  "type": "Exercise",
  "number": "1.1.5.4",
  "title": "",
  "body": "Which is steeper, the truck ramp for Acme Movers, which rises 4 feet over a horizontal distance of 9 feet, or a toy truck ramp, which rises 3 centimeters over a horizontal distance of 7 centimeters? "
},
{
  "id": "section-1-4-exercises-2-3-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-3-2",
  "type": "Exercise",
  "number": "1.1.5.5",
  "title": "",
  "body": " line on grid "
},
{
  "id": "section-1-4-exercises-2-3-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-3-3",
  "type": "Exercise",
  "number": "1.1.5.6",
  "title": "",
  "body": " line on grid "
},
{
  "id": "section-1-4-exercises-2-3-4",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-3-4",
  "type": "Exercise",
  "number": "1.1.5.7",
  "title": "",
  "body": " line on grid "
},
{
  "id": "section-1-4-exercises-2-3-5",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-2-3-5",
  "type": "Exercise",
  "number": "1.1.5.8",
  "title": "",
  "body": " line on grid "
},
{
  "id": "section-1-4-exercises-3-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-2",
  "type": "Exercise",
  "number": "1.1.5.9",
  "title": "",
  "body": " Compute the slope of the line.  graph  Start at point and move 4 units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Start at point and move units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Suppose you start at any point on the line and move 18 units in the -direction. How many units must you move in the -direction to get back to the line? Use the equation to calculate your answer.      27 "
},
{
  "id": "section-1-4-exercises-3-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-3",
  "type": "Exercise",
  "number": "1.1.5.10",
  "title": "",
  "body": " Compute the slope of the line.  graph  Start at point and move units in the -direction (down). How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Start at point and move 9 units in the positive -direction. How many units must you move in the -direction to get back to the line? What is the ratio of to ?  Suppose you start at any point on the line and move 24 units in the -direction. How many units must you move in the -direction to get back to the line? Use the equation to calculate your answer.  "
},
{
  "id": "section-1-4-exercises-3-4-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-4-2",
  "type": "Exercise",
  "number": "1.1.5.11",
  "title": "",
  "body": " four lines "
},
{
  "id": "section-1-4-exercises-3-4-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-4-3",
  "type": "Exercise",
  "number": "1.1.5.12",
  "title": "",
  "body": " four lines "
},
{
  "id": "section-1-4-exercises-3-4-4",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-4-4",
  "type": "Exercise",
  "number": "1.1.5.13",
  "title": "",
  "body": " four lines "
},
{
  "id": "section-1-4-exercises-3-4-5",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-4-5",
  "type": "Exercise",
  "number": "1.1.5.14",
  "title": "",
  "body": " four lines "
},
{
  "id": "section-1-4-exercises-3-5-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-5-2",
  "type": "Exercise",
  "number": "1.1.5.15",
  "title": "",
  "body": " 9x+12y=36  "
},
{
  "id": "section-1-4-exercises-3-5-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-5-3",
  "type": "Exercise",
  "number": "1.1.5.16",
  "title": "",
  "body": ""
},
{
  "id": "section-1-4-exercises-3-6",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-6",
  "type": "Exercise",
  "number": "1.1.5.17",
  "title": "",
  "body": "Residential staircaises are usually built with a slope of 70%, or . If the vertical distance between stories is 10 feet, how much horizontal space does the staircase require? 14.29 ft "
},
{
  "id": "section-1-4-exercises-3-7",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-7",
  "type": "Exercise",
  "number": "1.1.5.18",
  "title": "",
  "body": "A line has slope . Use the equation to find the horizontal or vertical change along the line.     "
},
{
  "id": "section-1-4-exercises-3-8-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-8-2",
  "type": "Exercise",
  "number": "1.1.5.19",
  "title": "",
  "body": "                                        (a) "
},
{
  "id": "section-1-4-exercises-3-8-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-3-8-3",
  "type": "Exercise",
  "number": "1.1.5.20",
  "title": "",
  "body": "                                        "
},
{
  "id": "section-1-4-exercises-4-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-2",
  "type": "Exercise",
  "number": "1.1.5.21",
  "title": "",
  "body": "The population of Smallville grew from 7000 people in 1990 to 16,600 in 2002.   Use a rate of change to calculate the town's average rate of growth, in people per year. First, complete the table of values:              line  Illustrate and by line segments on the graph. (Note that the -axis is labeled in thousands.)  How much did the town grow each year?  Write a linear model for in terms of .   del x and del y  800   "
},
{
  "id": "section-1-4-exercises-4-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-3",
  "type": "Exercise",
  "number": "1.1.5.22",
  "title": "",
  "body": "A traditional first experiment for chemistry students is to make 98 observations about a burning candle. Delbert records the height, , of the candle in inches at various times minutes after he lit it.                 Choose appropriate scales for the axes and plot the data. Do the points lie on a straight line?  Compute the slope of the graph, including units, and explain what the slope tells us about the candle.  Write a linear model for in terms of .  "
},
{
  "id": "section-1-4-exercises-4-4-2",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-4-2",
  "type": "Exercise",
  "number": "1.1.5.23",
  "title": "",
  "body": "The graph shows the number of liters of emergency water remaining in a southern California household days after an earthquake.  line with positive intercepts  liters\/day  The water supply is decreasing at a rate of 6 liters per day.  line with changes in W and t   "
},
{
  "id": "section-1-4-exercises-4-4-3",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-4-3",
  "type": "Exercise",
  "number": "1.1.5.24",
  "title": "",
  "body": "The graph shows the number of barrels of oil, , that have been pumped at a drill site days after a new drill is installed.  increasing graph "
},
{
  "id": "section-1-4-exercises-4-5",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-5",
  "type": "Exercise",
  "number": "1.1.5.25",
  "title": "",
  "body": "A spring is suspended from the ceiling. The table shows the length of the spring, in centimeters, as it is stretched by hanging various weights from it.            Weight, kg          Length, cm                  If you plot the data, will the points lie on a straight line? Why or why not?  Interpret the slope as a rate of change. Include units in your answer   Yes, the slope is 0.12  0.12 cm\/kg: The spring stretches an extra 0.12 cm for each additional 1 kg mass.  "
},
{
  "id": "section-1-4-exercises-4-6",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-6",
  "type": "Exercise",
  "number": "1.1.5.26",
  "title": "",
  "body": "The table gives the radius and circumference of various circles, rounded to three decimal places.       4  25.133   6  37.699   10  62.832   15  94.248    If we plot the data, will the points lie on a straight line? Why or why not?  What familiar number does the slope turn out to be? (Hint: Recall a formula from geometry.) What does the slope tell us about circles?  "
},
{
  "id": "section-1-4-exercises-4-7",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-7",
  "type": "Exercise",
  "number": "1.1.5.27",
  "title": "",
  "body": "Geologists calculate the speed of seismic waves by plotting the travel times for waves to reach seismometers at known distances from the epicenter. The speed of the wave can help them determine the nature of the material it passes through. The graph shows a travel time graph for P-waves from a shallow earthquake.  graph   Why do you think the graph is plotted with distance as the independent variable?  Use the graph to calculate the speed of the wave.   The distances to the stations are known.  5.7 km\/sec  "
},
{
  "id": "section-1-4-exercises-4-8",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-8",
  "type": "Exercise",
  "number": "1.1.5.28",
  "title": "",
  "body": "Niagara Falls was discovered by Father Louis Hennepin in 1682. In 1952, much of the water of the Niagara River was diverted for hydroelectric power, but until that time erosion caused the Falls to recede upstream by 3 feet per year.  How far did the Falls recede from 1682 to 1952?  The Falls were formed about 12,000 years ago during the end of the last ice age. How far downstream from their current position were they then? (Give your answer in miles.)   "
},
{
  "id": "section-1-4-exercises-4-9",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-9",
  "type": "Exercise",
  "number": "1.1.5.29",
  "title": "",
  "body": "Naismith’s Rule is used by runners and walkers to estimate journey times in hilly terrain. In 1892 Naismith wrote in the Scottish Mountaineering Club Journal that a person “in fair condition should allow for easy expeditions an hour for every three miles on the map, with an additional hour for every 2000 feet of ascent.” (Source: Scarf, 1998.)  According to Naismith, 1 unit of ascent requires the same travel time as how many units of horizontall travel? (This is called Naismith’s number.) Round your answer to one decimal place.  A walk in the Brecon Beacons in Wales covers 3.75 kilometers horizontally and climbs 582 meters. What is the equivalent flat distance?  If you can walk at a pace of 15 minutes per kilometer over flat ground, how long will the walk in the Brecon Beacons take you?   7.9  8.35 km  2 hrs 5 min  "
},
{
  "id": "section-1-4-exercises-4-10",
  "level": "2",
  "url": "Slope.html#section-1-4-exercises-4-10",
  "type": "Exercise",
  "number": "1.1.5.30",
  "title": "",
  "body": "The graph shows the rise in sea level attributed to the melting of land-based glaciers from 1960 to 2003.  rise in sea level   The graph appears to be almost linear from 1992 to 2002. Read the graph to complete the table, then compute the slope of the graph over that time interval, including units. What does the slope mean in this situation?    Year  Sea level   1992    2002    What was the total change in sea level from land-based glaciers over the time period from 1960 to 2003?  Calculate the average rate of change of sea level from land-based glaciers from 1960 to 2003.  From 1960 to 2003, the land-based glaciers decreased in thickness by about 8 meters (or 0.008 km). The total area of those glaciers is 785,000 square kilometers. Calculate the total volume of water released by melting. (Hint: )  The surface area of the world’s oceans is 361.6 million square kilometers. When the meltwater from the land-based glaciers (that's the volume you calculated in part (d)) enters the oceans, how much will the sea level rise, in kilometers? Use the formula in part (d). Convert your answer to millimeters, and check your answer against your answer to part (b).  "
},
{
  "id": "tkchap1",
  "level": "1",
  "url": "tkchap1.html",
  "type": "Section",
  "number": "A.1",
  "title": "Chapter 1 Linear Models",
  "body": "Chapter 1 Linear Models  Creating a Linear Model  Write a linear model  When we say \"Express in terms of ,\" we mean to write an equation that looks like We say that is the input variable, and is the output variable.  In particular, a linear model has the form   Steve bought a Blu-Ray player for $269 and a number of discs at $14 each. Write an expression for Steve's total bill, (before tax), in terms of the number of discs he bought, .  We want an equation of the form where Steve's bill started with the Blu-Ray player or $269, and then increased by a number of discs at a rate of $14 each. Substituting those values, we have  At 6 am the temperature was 50 , and it has been falling by 4 every hour. Write an equation for the temperature, , after hours.  We want an equation of the form The temperature started at 50 , and then decreased each hour at the rate of 4 per hour, so we subtract from 50 to get  Kyli's electricity company charges her $6 per month plus $0.10 per kilowatt hour (kWh) of energy she uses. Write an equation for Kyli's electric bill, , if she uses kWh of electricity.  Kyli's bill starts a6 $6 and increases by $0.10 for each kWh, . Thus,  Salewa saved $5000 to go to school full time. She spends $200 per week on living expenses. Write an equation for Salewa's savings, , after weeks.  As a student at City College, Delbert pays a $50 registration fee plus $15 for each unit he takes. Write an equation that gives Delbert's tuition, , if he takes units.  Greta's math notebook has 100 pages, and she uses on average 6 pages per day for notes and homework. How many pages, , will she have left after days?  Asa has typed 220 words of his term paper, and is still typing at a rate of 20 words per minute. How many words, , will Asa have typed after more minutes?  The temperature in Nome was F at noon. It has been rising at a rate of F per hour all day. Write an equation for the temperature, , after hours.  Francine borrowed money from her mother, and she owes her $750 right now. She has been paying off the debt at a rate of $50 per month. Write an equation for Francine's financial status, , in terms of , the number of months from now.    Plot points and graph a line  The simplest way to graph a line is to make a table and plot points. We will learn more efficient methods shortly.  Make a table of values, plot the points, and graph the equation .  Choose both positive and negative values for . Calculate the -value for each -value by substituting the -value into the equation.                                          Next, sketch a Cartesian coordinate system with appropriate scales on the - and -axes. Plot each of the points in the table of values and connect them with a straight line. The completed graph is shown at right.  line    Byron borrowed $6000 from his uncle to help pay for his college education. Now that he has graduated and has a job, he is paying back the loan at $100 per month.  Write an equation showing the amount of money, , that Byron still owes his uncle after months.  Graph your equation.                       Now choose appropriate scales for the axes. A good choice would be to scale the -axis by 10's and the -axis by 1000's.  line    Graph .                  grid                  line   Graph .                  grid                  line   Stuart invested $800 in a computer and now makes $5 a page typing research papers. Let represent the number of pages Stuart has typed, and let represent his profit.  Write an equation for in terms of .  Complete the table and graph your equation.                   grid                      line    Ludmilla earns a commission of 5% of her real estate sales. Let represent her sales in thousands of dollars, and let represent the commission she earns from her sales, in thousands of dollars.  Write an equation for in terms of .  Complete the table and graph the equation.                    grid                     line     Solve a linear equation  Recall that to solve an equation we want to \"isolate\" the variable on one side of the equals sign. We \"undo\" each operation performed on the variable by performing the opposite operation on both sides of the equation.  Solve the equation      Solve the equation  To begin, we must get both variable terms on the same side of the equation.  Solve the equation  Solve the equation   Solve the equation   Hint: Start by clearing the fraction: multiply both sides by 5.  Solve the equation   Hint: Start by combining like terms.   Solve a linear inequality  The rules for solving an inequality are the same as those for solving an equation, with one important difference:   Solving a Linear Inequality  If we multiply or divide both sides of a linear inequality by a negative number, we must reverse the direction of the inequality symbol.  Solve and graph the solutions on a number line.   The solutions are all the numbers less than . The graph of the solutions is shown below.  line graph   Solve and graph the solutions on a number line.   The solutions are all the numbers greater than 1 but less than 5.5. The graph of the solutions is shown below.  number line   Recall that a solid dot on a number line indicates that the number is part of the solution; an open dot means that the number is not part of the solution.  Solve the inequality and graph the solutions on a number line.   number line  Solve the inequality and graph the solutions on a number line.   number line  Solve the inequality and graph the solutions on a number line.   number line  Solve the inequality and graph the solutions on a number line.   number line    Graphs and Equations  Verify a solution  We can always check a solution to an equation by verifying that it makes the equation true.  Verify that is a solution of the equation   We show that substituting for makes the equation true. When we substitute a negative number for a variable, we should enclose the number in parentheses. Because the expression does equal , we see that is a solution.  Verify that is not a solution of the equation   We show that substituting for does not make the equation true. The left side of the equation does not equal 8 when , so is not a solution.   Decide whether the given value is a solution of the equation. Yes  Decide whether the given value is a solution of the equation. No  Decide whether the given value is a solution of the equation. Yes  Decide whether the given value is a solution of the equation. No   Solve linear equations and inequalities with parentheses   Strategy for solving linear equations   Simplify each side of the equation: apply the distributive law, combine like terms.  Use addition and subtraction to get all the variable terms on one side of the equation, and all constsnt terms on the other side.  Divide both sides by the coefficient of the variable.    Solve  First, we remove parentheses by applying the distributive law. Then we can combine like terms on each side of the equation.  Note that the minus sign in front of the parentheses on the right side of the equation applies to both terms inside the parentheses.   Solve the inequality  We begin by the same way we solve an equation. For this example, we start by removing the parentheses. Recall that if we multiply or divide both sides of an inequality by a negative number, we must reverse the direction of the inequality symbol.  Solve the inequality   Solve the equation   Solve the inequality   Solve the equation    Solutions of an equation in two variables  A solution of an equation in two variables and is written as an ordered pair , . For example, the solution means that and .  Is a solution of the equation ?  We substitute and into the equation. The ordered pair satisfies the equation, so it is a solution.  Which of the following ordered pairs are solutions of the equation whose graph is shown?      parabola   The graph of an equation is just a picture of its solutions, so points that lie on the graph are solutions of the equation.  The points and lie on the graph, so they represent solutions of the equation. The points and do not lie on the graph, so they are not solutions of the equation.  Find a solution of the equation with the given coordinate.  Find a solution of the equation with the given coordinate.  Find a solution of the equation with the given coordinate.  graph   Find a solution of the equation with the given coordinate.  graph     Intercepts  Graph a linear equation by the intercept method  To graph a line by the intercept method, we find the - and -intercepts of the line and plot those points.  Graph the equation by the intercept method.  First, we find the - and -intercepts of the graph. To find the -intercept, we substitute for and solve for : The -intercept is the point . To find the -intercept, we substitute for and solve for : The -intercept is the point .  A table with the two intercepts is shown below. We plot the intercepts and connect them with a straight line.           line   Graph the line by the intercept method.           8 by 8 grid  line  Graph the line by the intercept method.           grid  line   Interpret the intercepts  The values of the variables at the intercepts often tell us something important about a linear model  The temperature, , in Nome was at noon and has been rising at a rate of per hour all day.  Write and graph an equaton for in terms of , the number of hours after noon.  Find the intercepts of the graph and interpret their meaning in the context of the problem situation.   An equation for at time is To find the -intercept, we set and solve for .   Temperature in Nome  The -intercept is . This point tells us that when , or the temperature at noon was . To find the -intercept, we set and solve for . The -intercept is the point . This point tells us that when , or the temperature will reach zero degrees at six hours after noon, or 6 pm.   Sheri bought a bottle of multivitamins for her family. The number of vitamins lt in the bottle after days is given by    Find the intercepts and use them to make a graph of the equation.         Explain what each intercept tells us about the vitamins.   grid grid    There were 300 vitamins to start.  The vitamin bottle is empty after 60 days.   Delbert bought some equipment and went into the dog-grooming business. His profit is increasing according to the equation where is the number of dogs he has groomed.    Find the intercepts and use them to make a graph of the equation.          Explain what each intercept tells us about Delbert's dog-grooming business.   grid  grid   To start, Delbert's profit is . (He is $600 in debt.)  Delbert breaks even after grooming 15 dogs.      Solve an equation for one of the variables  It is usually easier to study a model and draw its graph if it is in the form To put an equation into this form, we want to \"isolate\" the output variable on one side of the equation.  Solve the equation for .    Solve the equation for .  It is nearly always best to clear fractions from an equation first, so we begin by multiplying both sides by 2.   Solve for  Solve for  Solve for  Solve for    Slope  Use ratios for comparison > Slope is a type of ratio that compares vertical distance per unit of horizontal distance. We use ratios for comparison in other situations, for example, when shopping we might compute price per unit.  You are choosing between two brands of iced tea. Which is a better bargain: a 28-ounce bottle of Teatime for $1.82, or a 36-ounce bottle of Leafdream for $2.25?  Compute the ratio price per ounce for each brand.  Leafdream is the better bargain.  The trail to Lookout Point gains 780 feet in elevation over a distance of 1.3 miles. The trail to Knife Edge gains 950 feet in elevation over a distance of 1.6 miles. Which trail is steeper?  Compute the ratio of elevation gain to horizontal distance traveled for each trail.  The Lookout Point trail is steeper.  Rachel drove 292.4 miles on 8.6 gallons of gasoline. Reuben drove 390 miles on 12 gallons of gasoline. Who got the better gas mileage?  Hint: Compute the ratio miles per gallon. Rachel: 34 miles per gallon; Reuben: 32.5 miles per gallon  Leslie drove 168 miles in 2.8 hours, and Mark drove 224 miles in 3.5 hours. Who drove at the greater average speed?  Hint: Compute the ratio miles per hour. Mark: 64 miles per hour; Leslie: 60 miles per hour   Calculate slope from a graph  We often think of slope as measuring the \"steepness\" of a graph, but the appearance of steepness is also affected by the scales on the axes.  Calculate the slope of the line.  line on grid   Choose two points on the line, and calculate the ratio of vertical change to horizontal change. Use the grid lines on the graph, but don't forget to note the scales on the axes.   line marked with horizontal and vertical change between two points  The slope is the ratio . The variable on the horizontal axis increases by 4 units, from 2 to 6, so . The variable on the vertical axis increases by 8 grid lines, but each grid line represents 2 units, so . Thus, the slope is .  Calculate the slope of the line.  line on grid   Choose two points on the line, and calculate the ratio of vertical change to horizontal change. Use the grid lines on the graph, but don't forget to note the scales on the axes.   line marked with horizontal and vertical change between two points  The slope is the ratio . The horizontal variable, , increases by 6 grid lines, but each grid line represents 2 units, so . The vertical variable, , decreases by 3 grid lines, or 6 units, so . Thus, .  Calculate the slope of the line.  Hint: Find two points that lie on the intersubsection of grid lines, so that it's easy to read their coordinates. For example, you could use and .  line on grid   Calculate the slope of the line.  Hint: Find two points that lie on the intersubsection of grid lines. For example, you could use and .  line on grid    Interpret the slope  Audrey can drive 150 miles on 6 gallons of gas, and 225 miles on 9 gallons of gas.   graph   Compute the slope of the graph, including units.  Interpret the slope as a rate; what does it tell you about the problem?     The car gets 25 miles per gallon in gas mileage   The sales tax on a $15 purchase is 60 cents, and 80 cents on a $20 purchase.   line on grid   Compute the slope of the graph, including units.  Interpret the slope as a rate; what does it tell you about the problem?   The tax rate is 4 cents per dollar, or 4%   Lynette is saving money for the down payment on a new car. The figure below shows the amount she has saved, in dollars, weeks after the first of the year.   graph of line   Compute the slope of the graph, including units.  What does the slope tell you about the problem?  dollars\/week  Lynette is saving $50 per week.  Jason is raising a rabbit for the county fair. The figure below shows the rabbit's weight when it was weeks old.   graph of line   Compute the rabbit's rate of growth, including units.  What does the slope tell you about the problem?  pound\/week  The rabbit gained 1 pound per week in weight.      Equations of Lines  Slope-Intercept Form  Because the -intercept is the \"starting value\" of a linear model, and its rate of change is measured by its slope, , the equation for a linear model can be expressed in symbols as  Slope-Intercept Form  If we write the equation of a linear function in the form, then is the slope slope of the line, and is the -intercept .   The temperature inside a pottery drying oven starts at 70 degrees and is rising at a rate of 0.5 degrees per minute. Write a function for the temperature, , inside the oven after minutes.  At , the temperature is 70 degrees, so .  The slope is given by the rate of increase of , so .  Thus, the function is  A perfect score on a driving test is 120 points, and you lose 4 points for each wrong answer. Write a function for your score, , if you give wrong answers.  If , your score is 120, so .  Your score decreases by 4 points per wrong answer, so .  The function is  Monica has saved $7800 to live on while she attends college. She spends $600 a month. Write a function for the amount, , in Monica's savings account after months. and , so  Jesse opened a new doughnut shop in an old store-front. He invested $2400 in remodeling and set-up, and he makes about $400 per week from the business. Write a function giving the shop's financial standing, , after weeks. and , so   Calculate slope using a formula  Recall that the subscripts on the coordinates in and just mean \"first point\" and \"second point\".  Two-Point Formula for Slope  The slope of the line joining points and is    Compute the slope of the line joining and .  It doesn't matter which point is and which is , so we choose to be . Then and . Thus,   Make sure that you subtract both the and coordinates in the same order! That is, do NOT calculate or your slope will have the wrong sign.  Compute the slope of the line joining the points and .  Compute the slope of the line joining the points and .   Point-Slope Form  If we don't know the -intercept of a line but we do know one other point and the slope, we can still find an equation for the line.  Point-Slope Formula  To find an equation for the line of slope passing through the point , use the point-slope formula or  Find an equation for the line that passes through and has slope .   We substitute , , and into the point-slope formula.   Find an equation for the line of slope that passes through .   We substitute , , and into the point-slope formula.   Find an equation for the line of slope that passes through .  Find an equation for the line of slope that passes through .   Graphing a linear equation by the point-slope method  If we know one point on a line and its slope, we can sketch its graph without having to make a table of values.  Graph the line   Step1: Begin by plotting the -intercept, .   Step 2: We use the slope, , to find another point on the line, as follows. Start at the point and move 3 units up and 4 units to the right. Plot a second point here, at .  Step 3: Find a third point by writing the slope as : from , move down 3 units and 4 units to the left. Plot a third point here, at .  line  Finally, draw a line through the three points.  Graph the line of slope that passes through .  Step 1: Begin by plotting the point .   Step 2: Use the slope, , to find another point on the line, as follows. Start at the point and move 1 unit down and 2 units to the right. Plot a second point here, at .  Step 3: Find a third point by writing the slope as : from , move 1 unit up and 2 units to the left. Plot a third point here, at .   line  Finally, draw a line through the three points.  Graph the line   10 by 10 grid y = -x\/3-3  Graph the line with slope passing through .  grid through (-1,-2) slope 3\/2    "
},
{
  "id": "tkWriteLinMod-2-2",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear model "
},
{
  "id": "tkWriteLinMod-3",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-3",
  "type": "Example",
  "number": "A.1.1",
  "title": "",
  "body": "Steve bought a Blu-Ray player for $269 and a number of discs at $14 each. Write an expression for Steve's total bill, (before tax), in terms of the number of discs he bought, .  We want an equation of the form where Steve's bill started with the Blu-Ray player or $269, and then increased by a number of discs at a rate of $14 each. Substituting those values, we have "
},
{
  "id": "tkWriteLinMod-4",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-4",
  "type": "Example",
  "number": "A.1.2",
  "title": "",
  "body": "At 6 am the temperature was 50 , and it has been falling by 4 every hour. Write an equation for the temperature, , after hours.  We want an equation of the form The temperature started at 50 , and then decreased each hour at the rate of 4 per hour, so we subtract from 50 to get "
},
{
  "id": "tkWriteLinMod-5",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-5",
  "type": "Example",
  "number": "A.1.3",
  "title": "",
  "body": "Kyli's electricity company charges her $6 per month plus $0.10 per kilowatt hour (kWh) of energy she uses. Write an equation for Kyli's electric bill, , if she uses kWh of electricity.  Kyli's bill starts a6 $6 and increases by $0.10 for each kWh, . Thus, "
},
{
  "id": "tkWriteLinMod-6",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-6",
  "type": "Checkpoint",
  "number": "A.1.4",
  "title": "",
  "body": "Salewa saved $5000 to go to school full time. She spends $200 per week on living expenses. Write an equation for Salewa's savings, , after weeks. "
},
{
  "id": "tkWriteLinMod-7",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-7",
  "type": "Checkpoint",
  "number": "A.1.5",
  "title": "",
  "body": "As a student at City College, Delbert pays a $50 registration fee plus $15 for each unit he takes. Write an equation that gives Delbert's tuition, , if he takes units. "
},
{
  "id": "tkWriteLinMod-8",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-8",
  "type": "Checkpoint",
  "number": "A.1.6",
  "title": "",
  "body": "Greta's math notebook has 100 pages, and she uses on average 6 pages per day for notes and homework. How many pages, , will she have left after days? "
},
{
  "id": "tkWriteLinMod-9",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-9",
  "type": "Checkpoint",
  "number": "A.1.7",
  "title": "",
  "body": "Asa has typed 220 words of his term paper, and is still typing at a rate of 20 words per minute. How many words, , will Asa have typed after more minutes? "
},
{
  "id": "tkWriteLinMod-10",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-10",
  "type": "Checkpoint",
  "number": "A.1.8",
  "title": "",
  "body": "The temperature in Nome was F at noon. It has been rising at a rate of F per hour all day. Write an equation for the temperature, , after hours. "
},
{
  "id": "tkWriteLinMod-11",
  "level": "2",
  "url": "tkchap1.html#tkWriteLinMod-11",
  "type": "Checkpoint",
  "number": "A.1.9",
  "title": "",
  "body": "Francine borrowed money from her mother, and she owes her $750 right now. She has been paying off the debt at a rate of $50 per month. Write an equation for Francine's financial status, , in terms of , the number of months from now. "
},
{
  "id": "tkPlotPoints-3",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-3",
  "type": "Example",
  "number": "A.1.10",
  "title": "",
  "body": "Make a table of values, plot the points, and graph the equation .  Choose both positive and negative values for . Calculate the -value for each -value by substituting the -value into the equation.                                          Next, sketch a Cartesian coordinate system with appropriate scales on the - and -axes. Plot each of the points in the table of values and connect them with a straight line. The completed graph is shown at right.  line   "
},
{
  "id": "tkPlotPoints-4",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-4",
  "type": "Example",
  "number": "A.1.11",
  "title": "",
  "body": "Byron borrowed $6000 from his uncle to help pay for his college education. Now that he has graduated and has a job, he is paying back the loan at $100 per month.  Write an equation showing the amount of money, , that Byron still owes his uncle after months.  Graph your equation.                       Now choose appropriate scales for the axes. A good choice would be to scale the -axis by 10's and the -axis by 1000's.  line   "
},
{
  "id": "tkPlotPoints-5",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-5",
  "type": "Checkpoint",
  "number": "A.1.12",
  "title": "",
  "body": "Graph .                  grid                  line  "
},
{
  "id": "tkPlotPoints-6",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-6",
  "type": "Checkpoint",
  "number": "A.1.13",
  "title": "",
  "body": "Graph .                  grid                  line  "
},
{
  "id": "tkPlotPoints-7",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-7",
  "type": "Checkpoint",
  "number": "A.1.14",
  "title": "",
  "body": "Stuart invested $800 in a computer and now makes $5 a page typing research papers. Let represent the number of pages Stuart has typed, and let represent his profit.  Write an equation for in terms of .  Complete the table and graph your equation.                   grid                      line   "
},
{
  "id": "tkPlotPoints-8",
  "level": "2",
  "url": "tkchap1.html#tkPlotPoints-8",
  "type": "Checkpoint",
  "number": "A.1.15",
  "title": "",
  "body": "Ludmilla earns a commission of 5% of her real estate sales. Let represent her sales in thousands of dollars, and let represent the commission she earns from her sales, in thousands of dollars.  Write an equation for in terms of .  Complete the table and graph the equation.                    grid                     line   "
},
{
  "id": "tkSolveLinEq-3",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-3",
  "type": "Example",
  "number": "A.1.16",
  "title": "",
  "body": "Solve the equation     "
},
{
  "id": "tkSolveLinEq-4",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-4",
  "type": "Example",
  "number": "A.1.17",
  "title": "",
  "body": "Solve the equation  To begin, we must get both variable terms on the same side of the equation. "
},
{
  "id": "tkSolveLinEq-5",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-5",
  "type": "Checkpoint",
  "number": "A.1.18",
  "title": "",
  "body": "Solve the equation "
},
{
  "id": "tkSolveLinEq-6",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-6",
  "type": "Checkpoint",
  "number": "A.1.19",
  "title": "",
  "body": "Solve the equation  "
},
{
  "id": "tkSolveLinEq-7",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-7",
  "type": "Checkpoint",
  "number": "A.1.20",
  "title": "",
  "body": "Solve the equation   Hint: Start by clearing the fraction: multiply both sides by 5. "
},
{
  "id": "tkSolveLinEq-8",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinEq-8",
  "type": "Checkpoint",
  "number": "A.1.21",
  "title": "",
  "body": "Solve the equation   Hint: Start by combining like terms. "
},
{
  "id": "tkSolveLinIneq-3",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-3",
  "type": "Example",
  "number": "A.1.22",
  "title": "",
  "body": "Solve and graph the solutions on a number line.   The solutions are all the numbers less than . The graph of the solutions is shown below.  line graph  "
},
{
  "id": "tkSolveLinIneq-4",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-4",
  "type": "Example",
  "number": "A.1.23",
  "title": "",
  "body": "Solve and graph the solutions on a number line.   The solutions are all the numbers greater than 1 but less than 5.5. The graph of the solutions is shown below.  number line  "
},
{
  "id": "tkSolveLinIneq-6",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-6",
  "type": "Checkpoint",
  "number": "A.1.24",
  "title": "",
  "body": "Solve the inequality and graph the solutions on a number line.   number line "
},
{
  "id": "tkSolveLinIneq-7",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-7",
  "type": "Checkpoint",
  "number": "A.1.25",
  "title": "",
  "body": "Solve the inequality and graph the solutions on a number line.   number line "
},
{
  "id": "tkSolveLinIneq-8",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-8",
  "type": "Checkpoint",
  "number": "A.1.26",
  "title": "",
  "body": "Solve the inequality and graph the solutions on a number line.   number line "
},
{
  "id": "tkSolveLinIneq-9",
  "level": "2",
  "url": "tkchap1.html#tkSolveLinIneq-9",
  "type": "Checkpoint",
  "number": "A.1.27",
  "title": "",
  "body": "Solve the inequality and graph the solutions on a number line.   number line "
},
{
  "id": "tkVerify-3",
  "level": "2",
  "url": "tkchap1.html#tkVerify-3",
  "type": "Example",
  "number": "A.1.28",
  "title": "",
  "body": "Verify that is a solution of the equation   We show that substituting for makes the equation true. When we substitute a negative number for a variable, we should enclose the number in parentheses. Because the expression does equal , we see that is a solution. "
},
{
  "id": "tkVerify-4",
  "level": "2",
  "url": "tkchap1.html#tkVerify-4",
  "type": "Example",
  "number": "A.1.29",
  "title": "",
  "body": "Verify that is not a solution of the equation   We show that substituting for does not make the equation true. The left side of the equation does not equal 8 when , so is not a solution.  "
},
{
  "id": "tkVerify-5",
  "level": "2",
  "url": "tkchap1.html#tkVerify-5",
  "type": "Checkpoint",
  "number": "A.1.30",
  "title": "",
  "body": "Decide whether the given value is a solution of the equation. Yes "
},
{
  "id": "tkVerify-6",
  "level": "2",
  "url": "tkchap1.html#tkVerify-6",
  "type": "Checkpoint",
  "number": "A.1.31",
  "title": "",
  "body": "Decide whether the given value is a solution of the equation. No "
},
{
  "id": "tkVerify-7",
  "level": "2",
  "url": "tkchap1.html#tkVerify-7",
  "type": "Checkpoint",
  "number": "A.1.32",
  "title": "",
  "body": "Decide whether the given value is a solution of the equation. Yes "
},
{
  "id": "tkVerify-8",
  "level": "2",
  "url": "tkchap1.html#tkVerify-8",
  "type": "Checkpoint",
  "number": "A.1.33",
  "title": "",
  "body": "Decide whether the given value is a solution of the equation. No "
},
{
  "id": "tkParens-3",
  "level": "2",
  "url": "tkchap1.html#tkParens-3",
  "type": "Example",
  "number": "A.1.34",
  "title": "",
  "body": "Solve  First, we remove parentheses by applying the distributive law. Then we can combine like terms on each side of the equation.  Note that the minus sign in front of the parentheses on the right side of the equation applies to both terms inside the parentheses.  "
},
{
  "id": "tkParens-4",
  "level": "2",
  "url": "tkchap1.html#tkParens-4",
  "type": "Example",
  "number": "A.1.35",
  "title": "",
  "body": "Solve the inequality  We begin by the same way we solve an equation. For this example, we start by removing the parentheses. Recall that if we multiply or divide both sides of an inequality by a negative number, we must reverse the direction of the inequality symbol. "
},
{
  "id": "tkParens-5",
  "level": "2",
  "url": "tkchap1.html#tkParens-5",
  "type": "Checkpoint",
  "number": "A.1.36",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkParens-6",
  "level": "2",
  "url": "tkchap1.html#tkParens-6",
  "type": "Checkpoint",
  "number": "A.1.37",
  "title": "",
  "body": "Solve the equation  "
},
{
  "id": "tkParens-7",
  "level": "2",
  "url": "tkchap1.html#tkParens-7",
  "type": "Checkpoint",
  "number": "A.1.38",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkParens-8",
  "level": "2",
  "url": "tkchap1.html#tkParens-8",
  "type": "Checkpoint",
  "number": "A.1.39",
  "title": "",
  "body": "Solve the equation  "
},
{
  "id": "tkEqn2Var-2-1",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered pair "
},
{
  "id": "tkEqn2Var-3",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-3",
  "type": "Example",
  "number": "A.1.40",
  "title": "",
  "body": "Is a solution of the equation ?  We substitute and into the equation. The ordered pair satisfies the equation, so it is a solution. "
},
{
  "id": "tkEqn2Var-4",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-4",
  "type": "Example",
  "number": "A.1.41",
  "title": "",
  "body": "Which of the following ordered pairs are solutions of the equation whose graph is shown?      parabola   The graph of an equation is just a picture of its solutions, so points that lie on the graph are solutions of the equation.  The points and lie on the graph, so they represent solutions of the equation. The points and do not lie on the graph, so they are not solutions of the equation. "
},
{
  "id": "tkEqn2Var-5",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-5",
  "type": "Checkpoint",
  "number": "A.1.42",
  "title": "",
  "body": "Find a solution of the equation with the given coordinate. "
},
{
  "id": "tkEqn2Var-6",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-6",
  "type": "Checkpoint",
  "number": "A.1.43",
  "title": "",
  "body": "Find a solution of the equation with the given coordinate. "
},
{
  "id": "tkEqn2Var-7",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-7",
  "type": "Checkpoint",
  "number": "A.1.44",
  "title": "",
  "body": "Find a solution of the equation with the given coordinate.  graph  "
},
{
  "id": "tkEqn2Var-8",
  "level": "2",
  "url": "tkchap1.html#tkEqn2Var-8",
  "type": "Checkpoint",
  "number": "A.1.45",
  "title": "",
  "body": "Find a solution of the equation with the given coordinate.  graph  "
},
{
  "id": "tkIntMeth-2-2",
  "level": "2",
  "url": "tkchap1.html#tkIntMeth-2-2",
  "type": "Example",
  "number": "A.1.46",
  "title": "",
  "body": "Graph the equation by the intercept method.  First, we find the - and -intercepts of the graph. To find the -intercept, we substitute for and solve for : The -intercept is the point . To find the -intercept, we substitute for and solve for : The -intercept is the point .  A table with the two intercepts is shown below. We plot the intercepts and connect them with a straight line.           line "
},
{
  "id": "tkIntMeth-3",
  "level": "2",
  "url": "tkchap1.html#tkIntMeth-3",
  "type": "Checkpoint",
  "number": "A.1.47",
  "title": "",
  "body": "Graph the line by the intercept method.           8 by 8 grid  line "
},
{
  "id": "tkIntMeth-4",
  "level": "2",
  "url": "tkchap1.html#tkIntMeth-4",
  "type": "Checkpoint",
  "number": "A.1.48",
  "title": "",
  "body": "Graph the line by the intercept method.           grid  line "
},
{
  "id": "tkInterpret-2-2",
  "level": "2",
  "url": "tkchap1.html#tkInterpret-2-2",
  "type": "Example",
  "number": "A.1.49",
  "title": "",
  "body": "The temperature, , in Nome was at noon and has been rising at a rate of per hour all day.  Write and graph an equaton for in terms of , the number of hours after noon.  Find the intercepts of the graph and interpret their meaning in the context of the problem situation.   An equation for at time is To find the -intercept, we set and solve for .   Temperature in Nome  The -intercept is . This point tells us that when , or the temperature at noon was . To find the -intercept, we set and solve for . The -intercept is the point . This point tells us that when , or the temperature will reach zero degrees at six hours after noon, or 6 pm. "
},
{
  "id": "tkInterpret-3",
  "level": "2",
  "url": "tkchap1.html#tkInterpret-3",
  "type": "Checkpoint",
  "number": "A.1.50",
  "title": "",
  "body": "Sheri bought a bottle of multivitamins for her family. The number of vitamins lt in the bottle after days is given by    Find the intercepts and use them to make a graph of the equation.         Explain what each intercept tells us about the vitamins.   grid grid    There were 300 vitamins to start.  The vitamin bottle is empty after 60 days.  "
},
{
  "id": "tkInterpret-4",
  "level": "2",
  "url": "tkchap1.html#tkInterpret-4",
  "type": "Checkpoint",
  "number": "A.1.51",
  "title": "",
  "body": "Delbert bought some equipment and went into the dog-grooming business. His profit is increasing according to the equation where is the number of dogs he has groomed.    Find the intercepts and use them to make a graph of the equation.          Explain what each intercept tells us about Delbert's dog-grooming business.   grid  grid   To start, Delbert's profit is . (He is $600 in debt.)  Delbert breaks even after grooming 15 dogs.    "
},
{
  "id": "tkSolveforVar-3",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-3",
  "type": "Example",
  "number": "A.1.52",
  "title": "",
  "body": "Solve the equation for .   "
},
{
  "id": "tkSolveforVar-4",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-4",
  "type": "Example",
  "number": "A.1.53",
  "title": "",
  "body": "Solve the equation for .  It is nearly always best to clear fractions from an equation first, so we begin by multiplying both sides by 2.  "
},
{
  "id": "tkSolveforVar-5",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-5",
  "type": "Checkpoint",
  "number": "A.1.54",
  "title": "",
  "body": "Solve for "
},
{
  "id": "tkSolveforVar-6",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-6",
  "type": "Checkpoint",
  "number": "A.1.55",
  "title": "",
  "body": "Solve for "
},
{
  "id": "tkSolveforVar-7",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-7",
  "type": "Checkpoint",
  "number": "A.1.56",
  "title": "",
  "body": "Solve for "
},
{
  "id": "tkSolveforVar-8",
  "level": "2",
  "url": "tkchap1.html#tkSolveforVar-8",
  "type": "Checkpoint",
  "number": "A.1.57",
  "title": "",
  "body": "Solve for "
},
{
  "id": "tkUseRatios-3",
  "level": "2",
  "url": "tkchap1.html#tkUseRatios-3",
  "type": "Example",
  "number": "A.1.58",
  "title": "",
  "body": "You are choosing between two brands of iced tea. Which is a better bargain: a 28-ounce bottle of Teatime for $1.82, or a 36-ounce bottle of Leafdream for $2.25?  Compute the ratio price per ounce for each brand.  Leafdream is the better bargain. "
},
{
  "id": "tkUseRatios-4",
  "level": "2",
  "url": "tkchap1.html#tkUseRatios-4",
  "type": "Example",
  "number": "A.1.59",
  "title": "",
  "body": "The trail to Lookout Point gains 780 feet in elevation over a distance of 1.3 miles. The trail to Knife Edge gains 950 feet in elevation over a distance of 1.6 miles. Which trail is steeper?  Compute the ratio of elevation gain to horizontal distance traveled for each trail.  The Lookout Point trail is steeper. "
},
{
  "id": "tkUseRatios-5",
  "level": "2",
  "url": "tkchap1.html#tkUseRatios-5",
  "type": "Checkpoint",
  "number": "A.1.60",
  "title": "",
  "body": "Rachel drove 292.4 miles on 8.6 gallons of gasoline. Reuben drove 390 miles on 12 gallons of gasoline. Who got the better gas mileage?  Hint: Compute the ratio miles per gallon. Rachel: 34 miles per gallon; Reuben: 32.5 miles per gallon "
},
{
  "id": "tkUseRatios-6",
  "level": "2",
  "url": "tkchap1.html#tkUseRatios-6",
  "type": "Checkpoint",
  "number": "A.1.61",
  "title": "",
  "body": "Leslie drove 168 miles in 2.8 hours, and Mark drove 224 miles in 3.5 hours. Who drove at the greater average speed?  Hint: Compute the ratio miles per hour. Mark: 64 miles per hour; Leslie: 60 miles per hour "
},
{
  "id": "tkSlopefromGraph-3",
  "level": "2",
  "url": "tkchap1.html#tkSlopefromGraph-3",
  "type": "Example",
  "number": "A.1.62",
  "title": "",
  "body": "Calculate the slope of the line.  line on grid   Choose two points on the line, and calculate the ratio of vertical change to horizontal change. Use the grid lines on the graph, but don't forget to note the scales on the axes.   line marked with horizontal and vertical change between two points  The slope is the ratio . The variable on the horizontal axis increases by 4 units, from 2 to 6, so . The variable on the vertical axis increases by 8 grid lines, but each grid line represents 2 units, so . Thus, the slope is . "
},
{
  "id": "tkSlopefromGraph-4",
  "level": "2",
  "url": "tkchap1.html#tkSlopefromGraph-4",
  "type": "Example",
  "number": "A.1.63",
  "title": "",
  "body": "Calculate the slope of the line.  line on grid   Choose two points on the line, and calculate the ratio of vertical change to horizontal change. Use the grid lines on the graph, but don't forget to note the scales on the axes.   line marked with horizontal and vertical change between two points  The slope is the ratio . The horizontal variable, , increases by 6 grid lines, but each grid line represents 2 units, so . The vertical variable, , decreases by 3 grid lines, or 6 units, so . Thus, . "
},
{
  "id": "tkSlopefromGraph-5",
  "level": "2",
  "url": "tkchap1.html#tkSlopefromGraph-5",
  "type": "Checkpoint",
  "number": "A.1.64",
  "title": "",
  "body": "Calculate the slope of the line.  Hint: Find two points that lie on the intersubsection of grid lines, so that it's easy to read their coordinates. For example, you could use and .  line on grid  "
},
{
  "id": "tkSlopefromGraph-6",
  "level": "2",
  "url": "tkchap1.html#tkSlopefromGraph-6",
  "type": "Checkpoint",
  "number": "A.1.65",
  "title": "",
  "body": "Calculate the slope of the line.  Hint: Find two points that lie on the intersubsection of grid lines. For example, you could use and .  line on grid  "
},
{
  "id": "tkInterpSlope-2",
  "level": "2",
  "url": "tkchap1.html#tkInterpSlope-2",
  "type": "Example",
  "number": "A.1.66",
  "title": "",
  "body": "Audrey can drive 150 miles on 6 gallons of gas, and 225 miles on 9 gallons of gas.   graph   Compute the slope of the graph, including units.  Interpret the slope as a rate; what does it tell you about the problem?     The car gets 25 miles per gallon in gas mileage  "
},
{
  "id": "tkInterpSlope-3",
  "level": "2",
  "url": "tkchap1.html#tkInterpSlope-3",
  "type": "Checkpoint",
  "number": "A.1.67",
  "title": "",
  "body": "The sales tax on a $15 purchase is 60 cents, and 80 cents on a $20 purchase.   line on grid   Compute the slope of the graph, including units.  Interpret the slope as a rate; what does it tell you about the problem?   The tax rate is 4 cents per dollar, or 4%  "
},
{
  "id": "tkInterpSlope-4",
  "level": "2",
  "url": "tkchap1.html#tkInterpSlope-4",
  "type": "Checkpoint",
  "number": "A.1.68",
  "title": "",
  "body": "Lynette is saving money for the down payment on a new car. The figure below shows the amount she has saved, in dollars, weeks after the first of the year.   graph of line   Compute the slope of the graph, including units.  What does the slope tell you about the problem?  dollars\/week  Lynette is saving $50 per week. "
},
{
  "id": "tkInterpSlope-5",
  "level": "2",
  "url": "tkchap1.html#tkInterpSlope-5",
  "type": "Checkpoint",
  "number": "A.1.69",
  "title": "",
  "body": "Jason is raising a rabbit for the county fair. The figure below shows the rabbit's weight when it was weeks old.   graph of line   Compute the rabbit's rate of growth, including units.  What does the slope tell you about the problem?  pound\/week  The rabbit gained 1 pound per week in weight.  "
},
{
  "id": "tkSlopeInt-2-2-2",
  "level": "2",
  "url": "tkchap1.html#tkSlopeInt-2-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope -intercept "
},
{
  "id": "tkSlopeInt-3",
  "level": "2",
  "url": "tkchap1.html#tkSlopeInt-3",
  "type": "Example",
  "number": "A.1.70",
  "title": "",
  "body": "The temperature inside a pottery drying oven starts at 70 degrees and is rising at a rate of 0.5 degrees per minute. Write a function for the temperature, , inside the oven after minutes.  At , the temperature is 70 degrees, so .  The slope is given by the rate of increase of , so .  Thus, the function is "
},
{
  "id": "tkSlopeInt-4",
  "level": "2",
  "url": "tkchap1.html#tkSlopeInt-4",
  "type": "Example",
  "number": "A.1.71",
  "title": "",
  "body": "A perfect score on a driving test is 120 points, and you lose 4 points for each wrong answer. Write a function for your score, , if you give wrong answers.  If , your score is 120, so .  Your score decreases by 4 points per wrong answer, so .  The function is "
},
{
  "id": "tkSlopeInt-5",
  "level": "2",
  "url": "tkchap1.html#tkSlopeInt-5",
  "type": "Checkpoint",
  "number": "A.1.72",
  "title": "",
  "body": "Monica has saved $7800 to live on while she attends college. She spends $600 a month. Write a function for the amount, , in Monica's savings account after months. and , so "
},
{
  "id": "tkSlopeInt-6",
  "level": "2",
  "url": "tkchap1.html#tkSlopeInt-6",
  "type": "Checkpoint",
  "number": "A.1.73",
  "title": "",
  "body": "Jesse opened a new doughnut shop in an old store-front. He invested $2400 in remodeling and set-up, and he makes about $400 per week from the business. Write a function giving the shop's financial standing, , after weeks. and , so "
},
{
  "id": "tkSlopeForm-3",
  "level": "2",
  "url": "tkchap1.html#tkSlopeForm-3",
  "type": "Example",
  "number": "A.1.74",
  "title": "",
  "body": "Compute the slope of the line joining and .  It doesn't matter which point is and which is , so we choose to be . Then and . Thus,  "
},
{
  "id": "tkSlopeForm-4",
  "level": "2",
  "url": "tkchap1.html#tkSlopeForm-4",
  "type": "Caution",
  "number": "A.1.75",
  "title": "",
  "body": "Make sure that you subtract both the and coordinates in the same order! That is, do NOT calculate or your slope will have the wrong sign. "
},
{
  "id": "tkSlopeForm-5",
  "level": "2",
  "url": "tkchap1.html#tkSlopeForm-5",
  "type": "Checkpoint",
  "number": "A.1.76",
  "title": "",
  "body": "Compute the slope of the line joining the points and . "
},
{
  "id": "tkSlopeForm-6",
  "level": "2",
  "url": "tkchap1.html#tkSlopeForm-6",
  "type": "Checkpoint",
  "number": "A.1.77",
  "title": "",
  "body": "Compute the slope of the line joining the points and . "
},
{
  "id": "tkPtSlope-3",
  "level": "2",
  "url": "tkchap1.html#tkPtSlope-3",
  "type": "Example",
  "number": "A.1.78",
  "title": "",
  "body": "Find an equation for the line that passes through and has slope .   We substitute , , and into the point-slope formula.  "
},
{
  "id": "tkPtSlope-4",
  "level": "2",
  "url": "tkchap1.html#tkPtSlope-4",
  "type": "Example",
  "number": "A.1.79",
  "title": "",
  "body": "Find an equation for the line of slope that passes through .   We substitute , , and into the point-slope formula.  "
},
{
  "id": "tkPtSlope-5",
  "level": "2",
  "url": "tkchap1.html#tkPtSlope-5",
  "type": "Checkpoint",
  "number": "A.1.80",
  "title": "",
  "body": "Find an equation for the line of slope that passes through . "
},
{
  "id": "tkPtSlope-6",
  "level": "2",
  "url": "tkchap1.html#tkPtSlope-6",
  "type": "Checkpoint",
  "number": "A.1.81",
  "title": "",
  "body": "Find an equation for the line of slope that passes through . "
},
{
  "id": "tkPtSlopeGraph-3",
  "level": "2",
  "url": "tkchap1.html#tkPtSlopeGraph-3",
  "type": "Example",
  "number": "A.1.82",
  "title": "",
  "body": "Graph the line   Step1: Begin by plotting the -intercept, .   Step 2: We use the slope, , to find another point on the line, as follows. Start at the point and move 3 units up and 4 units to the right. Plot a second point here, at .  Step 3: Find a third point by writing the slope as : from , move down 3 units and 4 units to the left. Plot a third point here, at .  line  Finally, draw a line through the three points. "
},
{
  "id": "tkPtSlopeGraph-4",
  "level": "2",
  "url": "tkchap1.html#tkPtSlopeGraph-4",
  "type": "Example",
  "number": "A.1.83",
  "title": "",
  "body": "Graph the line of slope that passes through .  Step 1: Begin by plotting the point .   Step 2: Use the slope, , to find another point on the line, as follows. Start at the point and move 1 unit down and 2 units to the right. Plot a second point here, at .  Step 3: Find a third point by writing the slope as : from , move 1 unit up and 2 units to the left. Plot a third point here, at .   line  Finally, draw a line through the three points. "
},
{
  "id": "tkPtSlopeGraph-5",
  "level": "2",
  "url": "tkchap1.html#tkPtSlopeGraph-5",
  "type": "Checkpoint",
  "number": "A.1.84",
  "title": "",
  "body": "Graph the line   10 by 10 grid y = -x\/3-3 "
},
{
  "id": "tkPtSlopeGraph-6",
  "level": "2",
  "url": "tkchap1.html#tkPtSlopeGraph-6",
  "type": "Checkpoint",
  "number": "A.1.85",
  "title": "",
  "body": "Graph the line with slope passing through .  grid through (-1,-2) slope 3\/2 "
},
{
  "id": "tkchap2",
  "level": "1",
  "url": "tkchap2.html",
  "type": "Section",
  "number": "A.2",
  "title": "Chapter 2 Applications of Linear Models",
  "body": "Chapter 2 Applications of Linear Models  Linear Regression  Read a scatterplot  We read the coordinates of points on a scatterplot the same way we do for any other graph.  The scatterplot shows the height and shoe size of a group of men.  State the height and shoe size of the man represented by point .  Find the heights of two men with the same shoe size.   scatterplot    The man represented by point has shoe size and is inches tall.  There are two men with shoe size 9, with heights 68 and 73 inches. There are also two men with shoe size , with heights 68 and 71 inches.    The scatterplot shows the heights of dance partners in a ballroom dance class.  How tall is the shortest woman?  What are the heights of the three partners of the 65-inch tall women?   scatterplot   59 in  , , and in   Sketch a line of best fit  Of course, the points on a scatterplot may not lie on a straight line. But if they seem to cluster near a line, we can try to find that line.  Sketch a line of best fit for the scatterplot above.  We draw a line that lies as close as possible to all of the data points. As a rule of thumb, we try to keep equal numbers of points on each side of the line.  scatterplot   Which of the lines fits the scatterplot best?  scatterplot Line L   Fit a line through two points  If we don't know the slope of a line, but we do know two points on the line, we can calculate the slope first and then use the point-slope formula.  Find an equation for the line that passes through and .   We solve this problem in two steps: First, find the slope of the line, and then use the point-slope formula.  Step 1: Let and . Use the slope formula to find   line thru (2,-1) and (-1,3)  Step 2: Apply the point-slope formula with and . (We can use either point in the formula.) Then Cross-multiply to find   Find an equation for the line that passes through and . Step 1: Compute the slope.  Step 2: Use the point-slope formula.    Linear Systems  Write equations in two variables  Applied problems that involve more than one unknown are often easier to model and solve with a system of equations.  Write equations about the number of tables and the number of chairs:  There are four chairs for each table.  Chairs cost $125 each; a table costs $350. Darryl spent $10,200 on tables and chairs.    Let be the number of tables and the number of chairs.  The number of chairs is 4 times the number of tables: .    Write equations about the dimensions of a rectangle:  The perimeter of the rectangle is 42 meters.  The length is 3 meters more than twice the width.   Let be the width of the rectangle and its length.     Write equations about the number of calories in a hamburger and in a chocolate shake.  A hamburger and a chocolate shake together contain 1020 calories.  Two shakes and three hamburgers contain 2710 calories.      Write equations about the vertex angle and the base angles of an isosceles triangle.  The vertex angle is less than each base angle.  The sum of the angles in a triangle is .       Identify the solution of a system  Recall that a solution to a system makes each equation in the system true.  Decide whether is a solution of the system   A solution must satisfy both equations. We substitute and into the equations. Yes, is a solution  Find the solution of the system graphed below.  Linear system   The solution must lie on both graphs, so it is the intersection point, . The coordinates of point are , so the solution of the system is .  Decide whether is a solution of the system No  Find the solution of the system graphed below.  Linear system   Use the formula for profit,  Profit  To find the profit earned by a company we subtract the costs from the revenue.  \"Revenue\" is the amount of money a company takes in from selling its product. A negative profit is the same as a loss.  The owner of a sandwich shop spent $800 last week for labor and supplies. She received $1150 in revenue. What was her profit?  We evaluate the formula with and to find The owner's profit was $350.  EcoGreen made $1848 profit on low-flow shower heads last year, and spent $3426 in costs. What was their revenue from shower heads?  We usse the profit formula and solve the equation to find that . Their revenue was $5094.   The Earth Alliance made $6000 in revenue from selling tickets to Earth Day, an educational event for children. Write an expression for their profit in terms of their costs.  What was their profit if their costs were $2500?    $3500   Last week Moe's Auto Shop took in $5400 in revenue, but experienced a loss of $800. What were Moe's costs last week? $6200    Algebraic Solution of Systems  Some familiar formulas are useful in writing equations to solve a problem.  Use the interest formula,  You have $5000 to invest for one year. You want to put part of the money into bonds that pay 7% interest, and the rest of the money into stocks that involve some risk but will pay 12% if successful. Now suppose you decide to invest dollars in stocks and dollars in bonds.  Use the interest formula, , to write expressions for the interest earned on the bonds and on the stocks.  Write an equation about the amount invested.  Write an equation to say that the total interest earned was $400.    Stocks: Bonds:     Mort invested money in two accounts, a savings plan that pays 8% interest and a mutual fund that pays 7% interest. He put twice as much money in the savings plan as in the mutual fund. At the end of the year Mort's total interest income was $345. How much did he invest in each account?  Use the interest formula to write expressions for the interest Mort earned on the savings plan and the interest he earned on the mutual fund.  Write an equation about the amount Mort invested.  Write an equation about the interest Mort earned.        Use the percent formula,  A pharmacist has on hand a solution of a certain medication at 40% strength, but she needs 48 ounces of the medication at 75% strength for a prescription. She decides to add a pure form of the medication to the 40% solution. How much of the each strength solution should she add to make a mixture of 75% strength?  Choose variables for the unknown quantities.  Write an equation about the amount of 75% solution.  Use the percent formula, , to calculate the amount of the medication in the original solution.  Use the percent formula to calculate the amount of the medication in the mixture.  Write an equation about the amount of medication.    Let stand for tthe amount of 40% solution and for the pure solution.        A pet store owner wants to mix a 12% saltwater solution and a 30% saltwater solution to obtain 90 liters of a 24% solution. He uses quarts of the 12% solution and quarts of the 30% solution.  Write an equation about the total amount of saltwater.  Use the percent formula to write expressions about the amount of salt in each original solution.  How many liters of salt are in the mixture?  Write an equation about the amount of salt.         Use the distance formula,  A river steamer requires 3 hours to travel 24 miles upstream and 2 hours for the return trip downstream. Let be the speed of the current and the speed of the steamer in still water.  Write an equation about the upstream trip.  Write an equation about the downstream trip.    The speed of the steamer aginst the current is , so  The speed of the steamer with the current is , so   A yacht leaves San Diego and heads south, traveling at 25 miles per hour. Six hours later a Coast Guard cutter leaves San Diego traveling at 40 miles per hour and pursues the yacht. Let be the time it takes the cutter to catch the yacht, and the distance it traveled.  Write an equation about the yacht's journey.  Write an equation about the cutter's journey.        Gaussian Reduction  Write an equation in standard form  Before we can use Gaussian reduction, we must write each equation in standard form.  Write the equation in standard form.     The standard form is . We add or subtract appropriate terms on both sides of the equation.  or  or   Write the equation in standard form.         Clear fractions from an equation  It is easier to use Gaussian reduction if the equations have integer coefficients.  Write the equation with integer coefficients.       We multiply both sides of the equation by .  We multiply both sides of the equation by the LCD of the fractions, .   Write the equation with integer coefficients.           Linear Inequalities in Two Variables  Solve a linear inequality  Before we solve inequalities in two variables, let's review solving linear inequalities in one variable.  Solve  We begin just as we do to solve an equation. The only difference is that we must reverse the direction of the inequality if we multiply or divide by a negative number. In interval notation, the solution set is .   Solve Write the solution with interval notation.   Solve Write the solution with interval notation.   Solve Write the solution with interval notation.   Solve Write the solution with interval notation.    Graph a line  The boundary of the solution set for a linear inequality in two variables is made up of portions of straight lines.  Use the most convenient method to graph the equation.       This equation is in the form , so the intercept method of graphing is convenient. The intercepts are and . The graph is shown below.  line  This equation is in the form , so the slope-intercept method of graphing is convenient. The -intercept is , and the slope is . The graph is shown below.  line   Graph the equation line  Graph the equation line  Graph the equation line  Graph the equation line   Solve a 2x2 system  To find the vertices of the boundary of the solution set, we solve a linear 2x2 system.  Use substitution to solve the system:   We start by solving the second equation for to get . Then we substitute this expression for into the first equation, which gives us We solve this equation for to find . Finally, we substitute into our first step to find The solution is , or .   Use elimination to solve the system:   We multiply the first equation by 3 and the second equation by in order to eliminate . Adding these two equations gives us , or . Finally, we substitute into either equation (we choose the first equation), and solve for . We find , so the solution is , or .   Solve the system:   Solve the system:   Solve the system:   Solve the system:     "
},
{
  "id": "tkReadScat-3",
  "level": "2",
  "url": "tkchap2.html#tkReadScat-3",
  "type": "Example",
  "number": "A.2.1",
  "title": "",
  "body": "The scatterplot shows the height and shoe size of a group of men.  State the height and shoe size of the man represented by point .  Find the heights of two men with the same shoe size.   scatterplot    The man represented by point has shoe size and is inches tall.  There are two men with shoe size 9, with heights 68 and 73 inches. There are also two men with shoe size , with heights 68 and 71 inches.  "
},
{
  "id": "tkReadScat-4",
  "level": "2",
  "url": "tkchap2.html#tkReadScat-4",
  "type": "Checkpoint",
  "number": "A.2.2",
  "title": "",
  "body": " The scatterplot shows the heights of dance partners in a ballroom dance class.  How tall is the shortest woman?  What are the heights of the three partners of the 65-inch tall women?   scatterplot   59 in  , , and in "
},
{
  "id": "tkBestFit-3",
  "level": "2",
  "url": "tkchap2.html#tkBestFit-3",
  "type": "Example",
  "number": "A.2.3",
  "title": "",
  "body": "Sketch a line of best fit for the scatterplot above.  We draw a line that lies as close as possible to all of the data points. As a rule of thumb, we try to keep equal numbers of points on each side of the line.  scatterplot "
},
{
  "id": "tkBestFit-4",
  "level": "2",
  "url": "tkchap2.html#tkBestFit-4",
  "type": "Checkpoint",
  "number": "A.2.4",
  "title": "",
  "body": " Which of the lines fits the scatterplot best?  scatterplot Line L "
},
{
  "id": "tkTwoPtFit-3",
  "level": "2",
  "url": "tkchap2.html#tkTwoPtFit-3",
  "type": "Example",
  "number": "A.2.5",
  "title": "",
  "body": "Find an equation for the line that passes through and .   We solve this problem in two steps: First, find the slope of the line, and then use the point-slope formula.  Step 1: Let and . Use the slope formula to find   line thru (2,-1) and (-1,3)  Step 2: Apply the point-slope formula with and . (We can use either point in the formula.) Then Cross-multiply to find  "
},
{
  "id": "tkTwoPtFit-4",
  "level": "2",
  "url": "tkchap2.html#tkTwoPtFit-4",
  "type": "Checkpoint",
  "number": "A.2.6",
  "title": "",
  "body": "Find an equation for the line that passes through and . Step 1: Compute the slope.  Step 2: Use the point-slope formula. "
},
{
  "id": "tkTwoVarEqn-3",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarEqn-3",
  "type": "Example",
  "number": "A.2.7",
  "title": "",
  "body": "Write equations about the number of tables and the number of chairs:  There are four chairs for each table.  Chairs cost $125 each; a table costs $350. Darryl spent $10,200 on tables and chairs.    Let be the number of tables and the number of chairs.  The number of chairs is 4 times the number of tables: .   "
},
{
  "id": "tkTwoVarEqn-4",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarEqn-4",
  "type": "Example",
  "number": "A.2.8",
  "title": "",
  "body": "Write equations about the dimensions of a rectangle:  The perimeter of the rectangle is 42 meters.  The length is 3 meters more than twice the width.   Let be the width of the rectangle and its length.    "
},
{
  "id": "tkTwoVarEqn-5",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarEqn-5",
  "type": "Checkpoint",
  "number": "A.2.9",
  "title": "",
  "body": "Write equations about the number of calories in a hamburger and in a chocolate shake.  A hamburger and a chocolate shake together contain 1020 calories.  Two shakes and three hamburgers contain 2710 calories.     "
},
{
  "id": "tkTwoVarEqn-6",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarEqn-6",
  "type": "Checkpoint",
  "number": "A.2.10",
  "title": "",
  "body": "Write equations about the vertex angle and the base angles of an isosceles triangle.  The vertex angle is less than each base angle.  The sum of the angles in a triangle is .     "
},
{
  "id": "tkSysSoln-3",
  "level": "2",
  "url": "tkchap2.html#tkSysSoln-3",
  "type": "Example",
  "number": "A.2.11",
  "title": "",
  "body": "Decide whether is a solution of the system   A solution must satisfy both equations. We substitute and into the equations. Yes, is a solution "
},
{
  "id": "tkSysSoln-4",
  "level": "2",
  "url": "tkchap2.html#tkSysSoln-4",
  "type": "Example",
  "number": "A.2.12",
  "title": "",
  "body": "Find the solution of the system graphed below.  Linear system   The solution must lie on both graphs, so it is the intersection point, . The coordinates of point are , so the solution of the system is . "
},
{
  "id": "tkSysSoln-5",
  "level": "2",
  "url": "tkchap2.html#tkSysSoln-5",
  "type": "Checkpoint",
  "number": "A.2.13",
  "title": "",
  "body": "Decide whether is a solution of the system No "
},
{
  "id": "tkSysSoln-6",
  "level": "2",
  "url": "tkchap2.html#tkSysSoln-6",
  "type": "Checkpoint",
  "number": "A.2.14",
  "title": "",
  "body": "Find the solution of the system graphed below.  Linear system "
},
{
  "id": "tkProfit-4",
  "level": "2",
  "url": "tkchap2.html#tkProfit-4",
  "type": "Example",
  "number": "A.2.15",
  "title": "",
  "body": "The owner of a sandwich shop spent $800 last week for labor and supplies. She received $1150 in revenue. What was her profit?  We evaluate the formula with and to find The owner's profit was $350. "
},
{
  "id": "tkProfit-5",
  "level": "2",
  "url": "tkchap2.html#tkProfit-5",
  "type": "Example",
  "number": "A.2.16",
  "title": "",
  "body": "EcoGreen made $1848 profit on low-flow shower heads last year, and spent $3426 in costs. What was their revenue from shower heads?  We usse the profit formula and solve the equation to find that . Their revenue was $5094. "
},
{
  "id": "tkProfit-6",
  "level": "2",
  "url": "tkchap2.html#tkProfit-6",
  "type": "Checkpoint",
  "number": "A.2.17",
  "title": "",
  "body": " The Earth Alliance made $6000 in revenue from selling tickets to Earth Day, an educational event for children. Write an expression for their profit in terms of their costs.  What was their profit if their costs were $2500?    $3500  "
},
{
  "id": "tkProfit-7",
  "level": "2",
  "url": "tkchap2.html#tkProfit-7",
  "type": "Checkpoint",
  "number": "A.2.18",
  "title": "",
  "body": "Last week Moe's Auto Shop took in $5400 in revenue, but experienced a loss of $800. What were Moe's costs last week? $6200 "
},
{
  "id": "tkInterest-2",
  "level": "2",
  "url": "tkchap2.html#tkInterest-2",
  "type": "Example",
  "number": "A.2.19",
  "title": "",
  "body": "You have $5000 to invest for one year. You want to put part of the money into bonds that pay 7% interest, and the rest of the money into stocks that involve some risk but will pay 12% if successful. Now suppose you decide to invest dollars in stocks and dollars in bonds.  Use the interest formula, , to write expressions for the interest earned on the bonds and on the stocks.  Write an equation about the amount invested.  Write an equation to say that the total interest earned was $400.    Stocks: Bonds:    "
},
{
  "id": "tkInterest-3",
  "level": "2",
  "url": "tkchap2.html#tkInterest-3",
  "type": "Checkpoint",
  "number": "A.2.20",
  "title": "",
  "body": "Mort invested money in two accounts, a savings plan that pays 8% interest and a mutual fund that pays 7% interest. He put twice as much money in the savings plan as in the mutual fund. At the end of the year Mort's total interest income was $345. How much did he invest in each account?  Use the interest formula to write expressions for the interest Mort earned on the savings plan and the interest he earned on the mutual fund.  Write an equation about the amount Mort invested.  Write an equation about the interest Mort earned.      "
},
{
  "id": "tkPercent-2",
  "level": "2",
  "url": "tkchap2.html#tkPercent-2",
  "type": "Example",
  "number": "A.2.21",
  "title": "",
  "body": "A pharmacist has on hand a solution of a certain medication at 40% strength, but she needs 48 ounces of the medication at 75% strength for a prescription. She decides to add a pure form of the medication to the 40% solution. How much of the each strength solution should she add to make a mixture of 75% strength?  Choose variables for the unknown quantities.  Write an equation about the amount of 75% solution.  Use the percent formula, , to calculate the amount of the medication in the original solution.  Use the percent formula to calculate the amount of the medication in the mixture.  Write an equation about the amount of medication.    Let stand for tthe amount of 40% solution and for the pure solution.       "
},
{
  "id": "tkPercent-3",
  "level": "2",
  "url": "tkchap2.html#tkPercent-3",
  "type": "Checkpoint",
  "number": "A.2.22",
  "title": "",
  "body": "A pet store owner wants to mix a 12% saltwater solution and a 30% saltwater solution to obtain 90 liters of a 24% solution. He uses quarts of the 12% solution and quarts of the 30% solution.  Write an equation about the total amount of saltwater.  Use the percent formula to write expressions about the amount of salt in each original solution.  How many liters of salt are in the mixture?  Write an equation about the amount of salt.       "
},
{
  "id": "tkDistance-2",
  "level": "2",
  "url": "tkchap2.html#tkDistance-2",
  "type": "Example",
  "number": "A.2.23",
  "title": "",
  "body": "A river steamer requires 3 hours to travel 24 miles upstream and 2 hours for the return trip downstream. Let be the speed of the current and the speed of the steamer in still water.  Write an equation about the upstream trip.  Write an equation about the downstream trip.    The speed of the steamer aginst the current is , so  The speed of the steamer with the current is , so  "
},
{
  "id": "tkDistance-3",
  "level": "2",
  "url": "tkchap2.html#tkDistance-3",
  "type": "Checkpoint",
  "number": "A.2.24",
  "title": "",
  "body": "A yacht leaves San Diego and heads south, traveling at 25 miles per hour. Six hours later a Coast Guard cutter leaves San Diego traveling at 40 miles per hour and pursues the yacht. Let be the time it takes the cutter to catch the yacht, and the distance it traveled.  Write an equation about the yacht's journey.  Write an equation about the cutter's journey.     "
},
{
  "id": "tkStdForm-3",
  "level": "2",
  "url": "tkchap2.html#tkStdForm-3",
  "type": "Example",
  "number": "A.2.25",
  "title": "",
  "body": "Write the equation in standard form.     The standard form is . We add or subtract appropriate terms on both sides of the equation.  or  or  "
},
{
  "id": "tkStdForm-4",
  "level": "2",
  "url": "tkchap2.html#tkStdForm-4",
  "type": "Checkpoint",
  "number": "A.2.26",
  "title": "",
  "body": "Write the equation in standard form.       "
},
{
  "id": "tkClrFrac-3",
  "level": "2",
  "url": "tkchap2.html#tkClrFrac-3",
  "type": "Example",
  "number": "A.2.27",
  "title": "",
  "body": "Write the equation with integer coefficients.       We multiply both sides of the equation by .  We multiply both sides of the equation by the LCD of the fractions, .  "
},
{
  "id": "tkClrFrac-4",
  "level": "2",
  "url": "tkchap2.html#tkClrFrac-4",
  "type": "Checkpoint",
  "number": "A.2.28",
  "title": "",
  "body": "Write the equation with integer coefficients.        "
},
{
  "id": "tkTwoVarIneq-3",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarIneq-3",
  "type": "Example",
  "number": "A.2.29",
  "title": "",
  "body": "Solve  We begin just as we do to solve an equation. The only difference is that we must reverse the direction of the inequality if we multiply or divide by a negative number. In interval notation, the solution set is .  "
},
{
  "id": "tkTwoVarIneq-4",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarIneq-4",
  "type": "Checkpoint",
  "number": "A.2.30",
  "title": "",
  "body": "Solve Write the solution with interval notation.  "
},
{
  "id": "tkTwoVarIneq-5",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarIneq-5",
  "type": "Checkpoint",
  "number": "A.2.31",
  "title": "",
  "body": "Solve Write the solution with interval notation.  "
},
{
  "id": "tkTwoVarIneq-6",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarIneq-6",
  "type": "Checkpoint",
  "number": "A.2.32",
  "title": "",
  "body": "Solve Write the solution with interval notation.  "
},
{
  "id": "tkTwoVarIneq-7",
  "level": "2",
  "url": "tkchap2.html#tkTwoVarIneq-7",
  "type": "Checkpoint",
  "number": "A.2.33",
  "title": "",
  "body": "Solve Write the solution with interval notation.  "
},
{
  "id": "tkGraphLine-3",
  "level": "2",
  "url": "tkchap2.html#tkGraphLine-3",
  "type": "Example",
  "number": "A.2.34",
  "title": "",
  "body": "Use the most convenient method to graph the equation.       This equation is in the form , so the intercept method of graphing is convenient. The intercepts are and . The graph is shown below.  line  This equation is in the form , so the slope-intercept method of graphing is convenient. The -intercept is , and the slope is . The graph is shown below.  line  "
},
{
  "id": "tkGraphLine-4",
  "level": "2",
  "url": "tkchap2.html#tkGraphLine-4",
  "type": "Checkpoint",
  "number": "A.2.35",
  "title": "",
  "body": "Graph the equation line "
},
{
  "id": "tkGraphLine-5",
  "level": "2",
  "url": "tkchap2.html#tkGraphLine-5",
  "type": "Checkpoint",
  "number": "A.2.36",
  "title": "",
  "body": "Graph the equation line "
},
{
  "id": "tkGraphLine-6",
  "level": "2",
  "url": "tkchap2.html#tkGraphLine-6",
  "type": "Checkpoint",
  "number": "A.2.37",
  "title": "",
  "body": "Graph the equation line "
},
{
  "id": "tkGraphLine-7",
  "level": "2",
  "url": "tkchap2.html#tkGraphLine-7",
  "type": "Checkpoint",
  "number": "A.2.38",
  "title": "",
  "body": "Graph the equation line "
},
{
  "id": "tkTwobyTwo-3",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-3",
  "type": "Example",
  "number": "A.2.39",
  "title": "",
  "body": "Use substitution to solve the system:   We start by solving the second equation for to get . Then we substitute this expression for into the first equation, which gives us We solve this equation for to find . Finally, we substitute into our first step to find The solution is , or .  "
},
{
  "id": "tkTwobyTwo-4",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-4",
  "type": "Example",
  "number": "A.2.40",
  "title": "",
  "body": "Use elimination to solve the system:   We multiply the first equation by 3 and the second equation by in order to eliminate . Adding these two equations gives us , or . Finally, we substitute into either equation (we choose the first equation), and solve for . We find , so the solution is , or .  "
},
{
  "id": "tkTwobyTwo-5",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-5",
  "type": "Checkpoint",
  "number": "A.2.41",
  "title": "",
  "body": "Solve the system:  "
},
{
  "id": "tkTwobyTwo-6",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-6",
  "type": "Checkpoint",
  "number": "A.2.42",
  "title": "",
  "body": "Solve the system:  "
},
{
  "id": "tkTwobyTwo-7",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-7",
  "type": "Checkpoint",
  "number": "A.2.43",
  "title": "",
  "body": "Solve the system:  "
},
{
  "id": "tkTwobyTwo-8",
  "level": "2",
  "url": "tkchap2.html#tkTwobyTwo-8",
  "type": "Checkpoint",
  "number": "A.2.44",
  "title": "",
  "body": "Solve the system:  "
},
{
  "id": "tkchap3",
  "level": "1",
  "url": "tkchap3.html",
  "type": "Section",
  "number": "A.3",
  "title": "Chapter 3 Quadratic Models",
  "body": "Chapter 3 Quadratic Models  Extraction of Roots  Evaluate quadratic expressions  When squaring a negative number, don't forget to enclose it in parentheses. For example, if , then If we write , then only the 4 is squared, so we have  Evaluate for .       Enclose in parentheses, and follow the order of operations.  Square first, then multiply by 2:  Square first, then subtract from 2:  Multiply by 2 first, then square:  Subtract from 2 first, then square:   Make a table of values for , and graph the equation.  We plot the points from the table and connect them with a smooth curve.                                                       parabola y=xsqd+2x-8  Evaluate for            Evaluate for              Evaluate for             Make a table of values for , and graph the equation.                                   grid                                  parabola   Use square roots  The simplest quadratic equations have the form They are missing a linear term, , and are not difficult to solve.  Solve by extraction of roots.  We isolate the quadratic term, , and then extract roots. The solutions are and .  Solve by extraction of roots.             Use geometric formulas  It may seem difficult to measure the inside of a round object like a sphere or a cone in cubic units, but you can imagine filling the object with liquid and then pouring the liquid into a box to measure its volume.  solids  A cone is 16 cm tall and its volume is 500 cm . What is the radius of the base of the cone?  We substitute and into the formula for the volume of a cone, and solve for . The radius of the cone is 5.46 cm.  A cylindrical syringe holds 100 cc (cubic centimeters) of fluid. If the syringe is 10 centimeters long, what is its radius? 1.78 cm  The diameter of a spherical wax candle is 5 inches. What is the volume of wax in the candle?  The radius of the candle is half its diameter, or 2.5 inches. The volume of the candle is  Find the volume of a cylindrical water tank whose diameter is 20 feet and whose height is 20 feet.  6283.2 cubic feet  The diameter of the Earth is about 7920 miles. Find its volume. About 260,120,000,000 cubic miles   Use the Pythagorean theorem  If and are the lengths of the legs of a right triangle and is the length of the hypotenuse, then Note that the theorem is true only for right triangles -- ones that have a 90 angle.  Find the unknown side in the right triangle.  right triangle   The unknown side is the hypotenuse, so we apply the Pythagorean theorem with , and . The length of the hypotenuse is a positive number, so .  A 25-foot ladder is placed against a wall so that its foot is 7 feet from the base of the wall. How far up the wall does the ladder reach?  We make a sketch and label the known dimensions, calling the unknown height . The ladder forms the hypotenuse of a right triangle, so we apply the Pythagorean theorem, substituting 25 for , 7 for , and for .   ladder  We solve the equation by extraction of roots: The height must be a positive number, so the ladder reaches 24 feet up the wall.  A baseball diamond is a square whose sides are 90 feet long. Find the straight-line distance from home plate to second base.  Make a sketch of the situation and label a right triangle.  Write an equation and solve.   baseball diamond  127.28 ft   How long a wire is needed to stretch from the top of a 40-foot telephone pole to a point on the ground 20 feet from the base of the pole?  Make a sketch of the situation and label a right triangle.  Write an equation and solve.   telephone pole and wire  44.72 ft     Intercepts, Solutions, and Factors  In this lesson we review the skills we need to solve quadratic equations by factoring.  Multiply binomials  Expand the product .  Multiply each term of the first binomial be each term of the second binomial. This gives four multiplications, often denoted by \"FOIL,\" which stands for First terms, Outside terms, Inside terms, and Last terms.     Expand the product .  First, multiply the binomial factors together. Then use the distributive law to multiply the result by the monomial factor, .   Expand the product .   Expand the product .  Expand the product .  Expand the product .   Factor quadratic trinomials  To factor the trinomial , we look for two numbers and whose product is the constant term and whose sum is the coefficient of the middle term.  Sign Patterns for Quadratic Trinomials  Assume that and are positive integers. Then   If all the coefficients of the trinomial are positive, then both and are positive.   If the middle term of the trinomial is negative and the other two terms are positive, then and are both negative.   If the constant term of the trinomial is negative, then and have opposite signs.   Factor as a product of two binomials,  The constant term is , so we look for two numbers and whose product is . There are three possibilities: Because the middle term is , we must have . We check each possibility and find that and . Thus,   Factor .  For this example we must find two numbers and for which and . These two conditions tell us that and must both be negative. We start by listing all the ways to factor with negative factors: We check for each possibility to see which one gives the correct middle term. Because , the factorization is  Factor .  This time the product must be negative, so and must have opposite signs, one positive and one negative. There are only two ways to factor , either times or times . We just \"guess\" that the second factor is negative, and check for each possibility: The middle term we want is , not , so we change the signs of and : we use and . The correct factorization is  Factor  Factor  Factor  Factor  Factor  Factor   Write algebraic expressions  Ralph and Wanda together weigh 320 pounds. If Ralph weighs pounds, how much does Wanda weigh?  We subtract Ralph's weight from the total; the remainder is Wanda's weight: pounds   Delbert and Francine live 24 miles apart on Route 30. They meet at a cafe between their houses. If Delbert drove miles, how far did Francine drive?  We subtract Delbert's distance from the total; the remainder is Francine's distance: miles  Three eggs and two slices of buttered toast contain 526 calories. If one egg contains calories, how many calories are in a slice of buttered toast?  We subtract the calories in three eggs from the total; the remainder is the number of calories in two slices of toast, so one slice has half that many calories:  The perimeter of a large rectangular playground is 124 yards. If its width is yards, what is its length?  We subtract twice the length from the perimeter; the remainder is twice the width, so the width is half that: yards  Garth and Taylor together made $86,000 last year. If Garth made dollars, how much did Taylor make? dollars  Six coffees and four pastries cost the office manager $21. If a pastry costs dollars, how much does a coffee cost? dollars  The vertex angle of an isosceles triangle is degrees. What is the measure of each of the two base angles? degrees  The perimeter of a rectangular swimming pool is 260 feet. If the length of the pool is feet, what is its width? feet    Graphing Parabolas  Find the average of two numbers  The average of two numbers lies half-way between them on a number line. To find their average, we take one-half of their sum. That is, the average of and is  The average of 4 and 9 is  The average of and is  The average of and is  Find the average of and .  Find the average of and .  Find the average of and .  Find the average of and .   Solve quadratic equations  Solve  We use extraction of roots. We first divide by 3 to isolate the squared expression. The solutions are and .  Solve  We solve by factoring. First, we get zero on one side of the equation. The solutions are and .  Solve  We solve by factoring. We factor the left side. The solutions are and .  Solve  Solve  Solve  Solve   Find the coordinates of points on a parabola  To find the -coordinate of a point on a parabola, we usually need to solve a quadratic equation.  Find the -coordinate of the point on the graph of with -coordinate .  Substitute into the equation, and evaluate. The -coordinate is 32, and the point is .  Find the -coordinates of all points on the graph of with -coordinate .  Substitute into the equation, and solve. The points are and .  Find the -coordinate of the point on the graph of with -coordinate .   The -coordinate of the vertex of is . Find the -coordinate of the vertex.   Find the -coordinates of all points on the graph of with -coordinate 8.   Find the -intercepts of the graph of .     Completing the Square  Squares of binomials  To solve a quadratic equation by completing the square, we create the square of a binomial:   Write each trinomial as the square of a binomial.      In the formula above, note that the coefficient of is and the constant term is . In this example, and , so , and  The coefficient of is and the constant terms is , so , and   Write as the square of a binomial.  Write as the square of a binomial.  Write as the square of a binomial.  Write as the square of a binomial.   To solve a quadratic equation by completing the square, we often have to work with fractions.  Multiply fractions  To multiply two fractions together, we multiply their numerators together, and multiply their denominators together. We can divide out any common factors in numerator and denominator before we multiply.  Multiply  We can divide out a factor of 2.  Multiply  We divide out common factors before multiplying.  Multiply.         Multiply.           Add fractions   To add or subtract unlike fractions  Find the LCD for the fractions.  Build each fraction to an equivalent one with the LCD as its denominator.  Add or subtract the numerators. Keep the same denominator.   Add.      Step1: Find the LCD. Factor each denominator. The LCD is .  Step2: Build each fraction to a denominator of 30. The building factor for the first fraction is , and for the second fraction. Step 3: Add the two like fractions, and reduce.  Step1: The LCD is 9.  Step 2: Build the whole number to a denominator of 9. Step 3: Add the two like fractions.   Add or subtract.         Add or subtract.            "
},
{
  "id": "tkQuadExp-3",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-3",
  "type": "Example",
  "number": "A.3.1",
  "title": "",
  "body": "Evaluate for .       Enclose in parentheses, and follow the order of operations.  Square first, then multiply by 2:  Square first, then subtract from 2:  Multiply by 2 first, then square:  Subtract from 2 first, then square:  "
},
{
  "id": "tkQuadExp-4",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-4",
  "type": "Example",
  "number": "A.3.2",
  "title": "",
  "body": "Make a table of values for , and graph the equation.  We plot the points from the table and connect them with a smooth curve.                                                       parabola y=xsqd+2x-8 "
},
{
  "id": "tkQuadExp-5",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-5",
  "type": "Checkpoint",
  "number": "A.3.3",
  "title": "",
  "body": "Evaluate for           "
},
{
  "id": "tkQuadExp-6",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-6",
  "type": "Checkpoint",
  "number": "A.3.4",
  "title": "",
  "body": "Evaluate for             "
},
{
  "id": "tkQuadExp-7",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-7",
  "type": "Checkpoint",
  "number": "A.3.5",
  "title": "",
  "body": "Evaluate for            "
},
{
  "id": "tkQuadExp-8",
  "level": "2",
  "url": "tkchap3.html#tkQuadExp-8",
  "type": "Checkpoint",
  "number": "A.3.6",
  "title": "",
  "body": "Make a table of values for , and graph the equation.                                   grid                                  parabola "
},
{
  "id": "tkSqRts-3",
  "level": "2",
  "url": "tkchap3.html#tkSqRts-3",
  "type": "Example",
  "number": "A.3.7",
  "title": "",
  "body": "Solve by extraction of roots.  We isolate the quadratic term, , and then extract roots. The solutions are and . "
},
{
  "id": "tkSqRts-4",
  "level": "2",
  "url": "tkchap3.html#tkSqRts-4",
  "type": "Checkpoint",
  "number": "A.3.8",
  "title": "",
  "body": "Solve by extraction of roots.           "
},
{
  "id": "tkGeomForm-4",
  "level": "2",
  "url": "tkchap3.html#tkGeomForm-4",
  "type": "Example",
  "number": "A.3.9",
  "title": "",
  "body": "A cone is 16 cm tall and its volume is 500 cm . What is the radius of the base of the cone?  We substitute and into the formula for the volume of a cone, and solve for . The radius of the cone is 5.46 cm. "
},
{
  "id": "tkGeomForm-5",
  "level": "2",
  "url": "tkchap3.html#tkGeomForm-5",
  "type": "Checkpoint",
  "number": "A.3.10",
  "title": "",
  "body": "A cylindrical syringe holds 100 cc (cubic centimeters) of fluid. If the syringe is 10 centimeters long, what is its radius? 1.78 cm "
},
{
  "id": "tkGeomForm-6",
  "level": "2",
  "url": "tkchap3.html#tkGeomForm-6",
  "type": "Example",
  "number": "A.3.11",
  "title": "",
  "body": "The diameter of a spherical wax candle is 5 inches. What is the volume of wax in the candle?  The radius of the candle is half its diameter, or 2.5 inches. The volume of the candle is "
},
{
  "id": "tkGeomForm-7",
  "level": "2",
  "url": "tkchap3.html#tkGeomForm-7",
  "type": "Checkpoint",
  "number": "A.3.12",
  "title": "",
  "body": "Find the volume of a cylindrical water tank whose diameter is 20 feet and whose height is 20 feet.  6283.2 cubic feet "
},
{
  "id": "tkGeomForm-8",
  "level": "2",
  "url": "tkchap3.html#tkGeomForm-8",
  "type": "Checkpoint",
  "number": "A.3.13",
  "title": "",
  "body": "The diameter of the Earth is about 7920 miles. Find its volume. About 260,120,000,000 cubic miles "
},
{
  "id": "tkPythTh-3",
  "level": "2",
  "url": "tkchap3.html#tkPythTh-3",
  "type": "Example",
  "number": "A.3.14",
  "title": "",
  "body": "Find the unknown side in the right triangle.  right triangle   The unknown side is the hypotenuse, so we apply the Pythagorean theorem with , and . The length of the hypotenuse is a positive number, so . "
},
{
  "id": "tkPythTh-4",
  "level": "2",
  "url": "tkchap3.html#tkPythTh-4",
  "type": "Example",
  "number": "A.3.15",
  "title": "",
  "body": "A 25-foot ladder is placed against a wall so that its foot is 7 feet from the base of the wall. How far up the wall does the ladder reach?  We make a sketch and label the known dimensions, calling the unknown height . The ladder forms the hypotenuse of a right triangle, so we apply the Pythagorean theorem, substituting 25 for , 7 for , and for .   ladder  We solve the equation by extraction of roots: The height must be a positive number, so the ladder reaches 24 feet up the wall. "
},
{
  "id": "tkPythTh-5",
  "level": "2",
  "url": "tkchap3.html#tkPythTh-5",
  "type": "Checkpoint",
  "number": "A.3.16",
  "title": "",
  "body": "A baseball diamond is a square whose sides are 90 feet long. Find the straight-line distance from home plate to second base.  Make a sketch of the situation and label a right triangle.  Write an equation and solve.   baseball diamond  127.28 ft  "
},
{
  "id": "tkPythTh-6",
  "level": "2",
  "url": "tkchap3.html#tkPythTh-6",
  "type": "Checkpoint",
  "number": "A.3.17",
  "title": "",
  "body": "How long a wire is needed to stretch from the top of a 40-foot telephone pole to a point on the ground 20 feet from the base of the pole?  Make a sketch of the situation and label a right triangle.  Write an equation and solve.   telephone pole and wire  44.72 ft  "
},
{
  "id": "tkMultBin-2",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-2",
  "type": "Example",
  "number": "A.3.18",
  "title": "",
  "body": "Expand the product .  Multiply each term of the first binomial be each term of the second binomial. This gives four multiplications, often denoted by \"FOIL,\" which stands for First terms, Outside terms, Inside terms, and Last terms.    "
},
{
  "id": "tkMultBin-3",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-3",
  "type": "Example",
  "number": "A.3.19",
  "title": "",
  "body": "Expand the product .  First, multiply the binomial factors together. Then use the distributive law to multiply the result by the monomial factor, .  "
},
{
  "id": "tkMultBin-4",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-4",
  "type": "Checkpoint",
  "number": "A.3.20",
  "title": "",
  "body": "Expand the product .  "
},
{
  "id": "tkMultBin-5",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-5",
  "type": "Checkpoint",
  "number": "A.3.21",
  "title": "",
  "body": "Expand the product . "
},
{
  "id": "tkMultBin-6",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-6",
  "type": "Checkpoint",
  "number": "A.3.22",
  "title": "",
  "body": "Expand the product . "
},
{
  "id": "tkMultBin-7",
  "level": "2",
  "url": "tkchap3.html#tkMultBin-7",
  "type": "Checkpoint",
  "number": "A.3.23",
  "title": "",
  "body": "Expand the product . "
},
{
  "id": "tkFacQuadTri-3",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-3",
  "type": "Example",
  "number": "A.3.24",
  "title": "",
  "body": "Factor as a product of two binomials,  The constant term is , so we look for two numbers and whose product is . There are three possibilities: Because the middle term is , we must have . We check each possibility and find that and . Thus,  "
},
{
  "id": "tkFacQuadTri-4",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-4",
  "type": "Example",
  "number": "A.3.25",
  "title": "",
  "body": "Factor .  For this example we must find two numbers and for which and . These two conditions tell us that and must both be negative. We start by listing all the ways to factor with negative factors: We check for each possibility to see which one gives the correct middle term. Because , the factorization is "
},
{
  "id": "tkFacQuadTri-5",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-5",
  "type": "Example",
  "number": "A.3.26",
  "title": "",
  "body": "Factor .  This time the product must be negative, so and must have opposite signs, one positive and one negative. There are only two ways to factor , either times or times . We just \"guess\" that the second factor is negative, and check for each possibility: The middle term we want is , not , so we change the signs of and : we use and . The correct factorization is "
},
{
  "id": "tkFacQuadTri-6",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-6",
  "type": "Checkpoint",
  "number": "A.3.27",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkFacQuadTri-7",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-7",
  "type": "Checkpoint",
  "number": "A.3.28",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkFacQuadTri-8",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-8",
  "type": "Checkpoint",
  "number": "A.3.29",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkFacQuadTri-9",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-9",
  "type": "Checkpoint",
  "number": "A.3.30",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkFacQuadTri-10",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-10",
  "type": "Checkpoint",
  "number": "A.3.31",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkFacQuadTri-11",
  "level": "2",
  "url": "tkchap3.html#tkFacQuadTri-11",
  "type": "Checkpoint",
  "number": "A.3.32",
  "title": "",
  "body": "Factor "
},
{
  "id": "tkWritAlgExp-2",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-2",
  "type": "Example",
  "number": "A.3.33",
  "title": "",
  "body": "Ralph and Wanda together weigh 320 pounds. If Ralph weighs pounds, how much does Wanda weigh?  We subtract Ralph's weight from the total; the remainder is Wanda's weight: pounds  "
},
{
  "id": "tkWritAlgExp-3",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-3",
  "type": "Example",
  "number": "A.3.34",
  "title": "",
  "body": "Delbert and Francine live 24 miles apart on Route 30. They meet at a cafe between their houses. If Delbert drove miles, how far did Francine drive?  We subtract Delbert's distance from the total; the remainder is Francine's distance: miles "
},
{
  "id": "tkWritAlgExp-4",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-4",
  "type": "Example",
  "number": "A.3.35",
  "title": "",
  "body": "Three eggs and two slices of buttered toast contain 526 calories. If one egg contains calories, how many calories are in a slice of buttered toast?  We subtract the calories in three eggs from the total; the remainder is the number of calories in two slices of toast, so one slice has half that many calories: "
},
{
  "id": "tkWritAlgExp-5",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-5",
  "type": "Example",
  "number": "A.3.36",
  "title": "",
  "body": "The perimeter of a large rectangular playground is 124 yards. If its width is yards, what is its length?  We subtract twice the length from the perimeter; the remainder is twice the width, so the width is half that: yards "
},
{
  "id": "tkWritAlgExp-6",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-6",
  "type": "Checkpoint",
  "number": "A.3.37",
  "title": "",
  "body": "Garth and Taylor together made $86,000 last year. If Garth made dollars, how much did Taylor make? dollars "
},
{
  "id": "tkWritAlgExp-7",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-7",
  "type": "Checkpoint",
  "number": "A.3.38",
  "title": "",
  "body": "Six coffees and four pastries cost the office manager $21. If a pastry costs dollars, how much does a coffee cost? dollars "
},
{
  "id": "tkWritAlgExp-8",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-8",
  "type": "Checkpoint",
  "number": "A.3.39",
  "title": "",
  "body": "The vertex angle of an isosceles triangle is degrees. What is the measure of each of the two base angles? degrees "
},
{
  "id": "tkWritAlgExp-9",
  "level": "2",
  "url": "tkchap3.html#tkWritAlgExp-9",
  "type": "Checkpoint",
  "number": "A.3.40",
  "title": "",
  "body": "The perimeter of a rectangular swimming pool is 260 feet. If the length of the pool is feet, what is its width? feet "
},
{
  "id": "tkAvg-3",
  "level": "2",
  "url": "tkchap3.html#tkAvg-3",
  "type": "Example",
  "number": "A.3.41",
  "title": "",
  "body": "The average of 4 and 9 is "
},
{
  "id": "tkAvg-4",
  "level": "2",
  "url": "tkchap3.html#tkAvg-4",
  "type": "Example",
  "number": "A.3.42",
  "title": "",
  "body": "The average of and is "
},
{
  "id": "tkAvg-5",
  "level": "2",
  "url": "tkchap3.html#tkAvg-5",
  "type": "Example",
  "number": "A.3.43",
  "title": "",
  "body": "The average of and is "
},
{
  "id": "tkAvg-6",
  "level": "2",
  "url": "tkchap3.html#tkAvg-6",
  "type": "Checkpoint",
  "number": "A.3.44",
  "title": "",
  "body": "Find the average of and . "
},
{
  "id": "tkAvg-7",
  "level": "2",
  "url": "tkchap3.html#tkAvg-7",
  "type": "Checkpoint",
  "number": "A.3.45",
  "title": "",
  "body": "Find the average of and . "
},
{
  "id": "tkAvg-8",
  "level": "2",
  "url": "tkchap3.html#tkAvg-8",
  "type": "Checkpoint",
  "number": "A.3.46",
  "title": "",
  "body": "Find the average of and . "
},
{
  "id": "tkAvg-9",
  "level": "2",
  "url": "tkchap3.html#tkAvg-9",
  "type": "Checkpoint",
  "number": "A.3.47",
  "title": "",
  "body": "Find the average of and . "
},
{
  "id": "tkSolvQuadEqn-2",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-2",
  "type": "Example",
  "number": "A.3.48",
  "title": "",
  "body": "Solve  We use extraction of roots. We first divide by 3 to isolate the squared expression. The solutions are and . "
},
{
  "id": "tkSolvQuadEqn-3",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-3",
  "type": "Example",
  "number": "A.3.49",
  "title": "",
  "body": "Solve  We solve by factoring. First, we get zero on one side of the equation. The solutions are and . "
},
{
  "id": "tkSolvQuadEqn-4",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-4",
  "type": "Example",
  "number": "A.3.50",
  "title": "",
  "body": "Solve  We solve by factoring. We factor the left side. The solutions are and . "
},
{
  "id": "tkSolvQuadEqn-5",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-5",
  "type": "Checkpoint",
  "number": "A.3.51",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSolvQuadEqn-6",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-6",
  "type": "Checkpoint",
  "number": "A.3.52",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSolvQuadEqn-7",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-7",
  "type": "Checkpoint",
  "number": "A.3.53",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSolvQuadEqn-8",
  "level": "2",
  "url": "tkchap3.html#tkSolvQuadEqn-8",
  "type": "Checkpoint",
  "number": "A.3.54",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkParabPts-3",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-3",
  "type": "Example",
  "number": "A.3.55",
  "title": "",
  "body": "Find the -coordinate of the point on the graph of with -coordinate .  Substitute into the equation, and evaluate. The -coordinate is 32, and the point is . "
},
{
  "id": "tkParabPts-4",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-4",
  "type": "Example",
  "number": "A.3.56",
  "title": "",
  "body": "Find the -coordinates of all points on the graph of with -coordinate .  Substitute into the equation, and solve. The points are and . "
},
{
  "id": "tkParabPts-5",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-5",
  "type": "Checkpoint",
  "number": "A.3.57",
  "title": "",
  "body": "Find the -coordinate of the point on the graph of with -coordinate .  "
},
{
  "id": "tkParabPts-6",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-6",
  "type": "Checkpoint",
  "number": "A.3.58",
  "title": "",
  "body": "The -coordinate of the vertex of is . Find the -coordinate of the vertex.  "
},
{
  "id": "tkParabPts-7",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-7",
  "type": "Checkpoint",
  "number": "A.3.59",
  "title": "",
  "body": "Find the -coordinates of all points on the graph of with -coordinate 8.  "
},
{
  "id": "tkParabPts-8",
  "level": "2",
  "url": "tkchap3.html#tkParabPts-8",
  "type": "Checkpoint",
  "number": "A.3.60",
  "title": "",
  "body": "Find the -intercepts of the graph of .  "
},
{
  "id": "tkBinSq-3",
  "level": "2",
  "url": "tkchap3.html#tkBinSq-3",
  "type": "Example",
  "number": "A.3.61",
  "title": "",
  "body": "Write each trinomial as the square of a binomial.      In the formula above, note that the coefficient of is and the constant term is . In this example, and , so , and  The coefficient of is and the constant terms is , so , and  "
},
{
  "id": "tkBinSq-4",
  "level": "2",
  "url": "tkchap3.html#tkBinSq-4",
  "type": "Checkpoint",
  "number": "A.3.62",
  "title": "",
  "body": "Write as the square of a binomial. "
},
{
  "id": "tkBinSq-5",
  "level": "2",
  "url": "tkchap3.html#tkBinSq-5",
  "type": "Checkpoint",
  "number": "A.3.63",
  "title": "",
  "body": "Write as the square of a binomial. "
},
{
  "id": "tkBinSq-6",
  "level": "2",
  "url": "tkchap3.html#tkBinSq-6",
  "type": "Checkpoint",
  "number": "A.3.64",
  "title": "",
  "body": "Write as the square of a binomial. "
},
{
  "id": "tkBinSq-7",
  "level": "2",
  "url": "tkchap3.html#tkBinSq-7",
  "type": "Checkpoint",
  "number": "A.3.65",
  "title": "",
  "body": "Write as the square of a binomial. "
},
{
  "id": "tkMultFrac-3",
  "level": "2",
  "url": "tkchap3.html#tkMultFrac-3",
  "type": "Example",
  "number": "A.3.66",
  "title": "",
  "body": "Multiply  We can divide out a factor of 2. "
},
{
  "id": "tkMultFrac-4",
  "level": "2",
  "url": "tkchap3.html#tkMultFrac-4",
  "type": "Example",
  "number": "A.3.67",
  "title": "",
  "body": "Multiply  We divide out common factors before multiplying. "
},
{
  "id": "tkMultFrac-5",
  "level": "2",
  "url": "tkchap3.html#tkMultFrac-5",
  "type": "Checkpoint",
  "number": "A.3.68",
  "title": "",
  "body": "Multiply.        "
},
{
  "id": "tkMultFrac-6",
  "level": "2",
  "url": "tkchap3.html#tkMultFrac-6",
  "type": "Checkpoint",
  "number": "A.3.69",
  "title": "",
  "body": "Multiply.         "
},
{
  "id": "tkAddFrac-3",
  "level": "2",
  "url": "tkchap3.html#tkAddFrac-3",
  "type": "Example",
  "number": "A.3.70",
  "title": "",
  "body": "Add.      Step1: Find the LCD. Factor each denominator. The LCD is .  Step2: Build each fraction to a denominator of 30. The building factor for the first fraction is , and for the second fraction. Step 3: Add the two like fractions, and reduce.  Step1: The LCD is 9.  Step 2: Build the whole number to a denominator of 9. Step 3: Add the two like fractions.  "
},
{
  "id": "tkAddFrac-4",
  "level": "2",
  "url": "tkchap3.html#tkAddFrac-4",
  "type": "Checkpoint",
  "number": "A.3.71",
  "title": "",
  "body": "Add or subtract.        "
},
{
  "id": "tkAddFrac-5",
  "level": "2",
  "url": "tkchap3.html#tkAddFrac-5",
  "type": "Checkpoint",
  "number": "A.3.72",
  "title": "",
  "body": "Add or subtract.         "
},
{
  "id": "tkchap4",
  "level": "1",
  "url": "tkchap4.html",
  "type": "Section",
  "number": "A.4",
  "title": "Chapter 4 Applications of Quadratic Models",
  "body": "Chapter 4 Applications of Quadratic Models  Quadratic Formula   Simplify square roots  Be careful when simplifying radicals.  Can you simplify the first expression into the second expression? (Decide whether the expressions are equivalent.)  Is equivalent to ?  Is equivalent to for ?  Is equivalent to ?    If the expressions are equivalent, they must be equal for every value of the variable. Let's test with . Then No, the expressions are not equivalent.  Because , it is also true that . Yes, the expressions are equivalent.  Let . Then No, the expressions are not equivalent.   Decide whether the expressions are equivalent. Assume all variables are positive.  and No  and Yes  and No  and Yes   Use the order of operations  In the order of operations, simplifying radicals comes after what's inside parentheses (or fraction bars) and before products and quotients.  Simplify each expression. Do not use a calculator!       We start by simplifying the numerator.  We start by simplifyng what's inside parentheses.  We start by simplifying the radicand.   Simplify each expression. Round your answer to hundredths.      Do not start with \" \"! Evaluate first, then multiply by 2, and subtract the result from 8. Once the numerator is simplified, divide by 4.  On a calculator, enter           ENTER  and round to two decimal places:  Evaluate the cube root, multiply by 6, then add the result to 2.  On a calculator, enter     MATH  4    ENTER  and round to two decimal places:   Simplify each expression. Do not use a calculator!          Simplify each expression. Round your answer to hundredths.          The Vertex  Parabolas in vertex form  We can sketch the graph of a parabola with the vertex, the -intercept, and its symmetric point.  Graph the equation  The vertex is . We find the -intercept by setting : The -intercept is . We find the -intercepts by setting : The -intercepts are and . We plot these three points and sketch the parabola through them.  parabola  Find the vertex, the -intercept, and the -intercepts of , and sketch its graph. parabola   Product of binomials  With practice, you will be able to multiply binomials mentally.  Multiply .  We apply the distributive law to multiply each term of the first factor by each term of the second factor. (The \"FOIL\" method.)  Expand .  Multiply   Multiply .  Expand .   Solve for a parameter  We can find the equation for a parabola if we know, for example, the vertex and one other point.  The point lies on the graph of Solve for .  Substitute 6 for and 2 for , then solve for . The solution is .  The point lies on the graph of Solve for .  Substitute -2 for and 11 for , then solve for . The solution is .  The point lies on the graph of Solve for .  The point lies on the graph of Solve for .  The point lies on the graph of Solve for .  The point lies on the graph of Solve for .    Curve Fitting  Points on a graph  If a curve passes through a given point, the coordinates of the point satisfy the equation of the curve.  Write an equation to say that lies on the graph of .  Substitute for and for .   Write an equation to say that lies on the graph of .   Write an equation to say that lies on the graph of .   Write an equation to say that lies on the graph of .   Write an equation to say that lies on the graph of .    Solve a 2x2 linear system  For fitting a parabola through given points, we'll solve systems using the method of elimination.  Solve the system by elimination.   To eliminate the -terms,look for the smallest integer that both 2 and 5 divide into evenly, namely, 10. Multiply the first equation by 2 and the second equation by . Add these new equations to obtain an equation in . Solve for to find . Finally, substitute into the first equation and solve for . The solution to the system is .  Solve the system by elimination.   Solve the system by elimination.    Special 3x3 linear system  In this special case of solving a 3x3 system, we can eliminate to create a 2x2 system.  Solve the system by elimination.  Eliminate by subtracting (1) from (2), then eliminate again by subtracting (1) from (3), to get a 2x2 system: Divide the first equation by 3 and the second equation by 2, then add. We see that . Substituting into the equation , we find that . Finally, we substitue and into equation (1) to find The solution is , and .   Solve the system by elimination.    Quadratic Inequalities  Solve a linear inequality  First, let's review solving linear inqualities.  Solve and graph the solutions on a number line.   The graph of the solutions is shown below.  number line   Solve and graph the solutions on a number line.   The graph of the solutions is shown below.  number line   Solve the inequality   Solve the inequality   Solve the inequality   Solve the inequality    -intercepts of a parabola  To solve a quadratic inequality, we first find the -intercepts of the graph. Remember that there are four different methods for solving a quadratic equation.  Find the -intercepts of the parabola  Set and solve for . Use extraction of roots. The -intercepts are and , or about and .   Find the -intercepts of the parabola  Set and solve for . Factor the right side. The -intercepts are and .   Find the -intercepts of the parabola  Set and solve for . Factor the right side. The -intercepts are and .   Find the -intercepts of the parabola  Set and solve for . Use the quadratic formula. The -intercepts are and , or about and .   For each Exercise, find the -intercepts of the parabola.   ,      "
},
{
  "id": "tkSimpSq-3",
  "level": "2",
  "url": "tkchap4.html#tkSimpSq-3",
  "type": "Example",
  "number": "A.4.1",
  "title": "",
  "body": "Can you simplify the first expression into the second expression? (Decide whether the expressions are equivalent.)  Is equivalent to ?  Is equivalent to for ?  Is equivalent to ?    If the expressions are equivalent, they must be equal for every value of the variable. Let's test with . Then No, the expressions are not equivalent.  Because , it is also true that . Yes, the expressions are equivalent.  Let . Then No, the expressions are not equivalent.  "
},
{
  "id": "tkSimpSq-5",
  "level": "2",
  "url": "tkchap4.html#tkSimpSq-5",
  "type": "Checkpoint",
  "number": "A.4.2",
  "title": "",
  "body": "and No "
},
{
  "id": "tkSimpSq-6",
  "level": "2",
  "url": "tkchap4.html#tkSimpSq-6",
  "type": "Checkpoint",
  "number": "A.4.3",
  "title": "",
  "body": "and Yes "
},
{
  "id": "tkSimpSq-7",
  "level": "2",
  "url": "tkchap4.html#tkSimpSq-7",
  "type": "Checkpoint",
  "number": "A.4.4",
  "title": "",
  "body": "and No "
},
{
  "id": "tkSimpSq-8",
  "level": "2",
  "url": "tkchap4.html#tkSimpSq-8",
  "type": "Checkpoint",
  "number": "A.4.5",
  "title": "",
  "body": "and Yes "
},
{
  "id": "tkOrderOp2-3",
  "level": "2",
  "url": "tkchap4.html#tkOrderOp2-3",
  "type": "Example",
  "number": "A.4.6",
  "title": "",
  "body": "Simplify each expression. Do not use a calculator!       We start by simplifying the numerator.  We start by simplifyng what's inside parentheses.  We start by simplifying the radicand.  "
},
{
  "id": "tkOrderOp2-4",
  "level": "2",
  "url": "tkchap4.html#tkOrderOp2-4",
  "type": "Example",
  "number": "A.4.7",
  "title": "",
  "body": "Simplify each expression. Round your answer to hundredths.      Do not start with \" \"! Evaluate first, then multiply by 2, and subtract the result from 8. Once the numerator is simplified, divide by 4.  On a calculator, enter           ENTER  and round to two decimal places:  Evaluate the cube root, multiply by 6, then add the result to 2.  On a calculator, enter     MATH  4    ENTER  and round to two decimal places:  "
},
{
  "id": "tkOrderOp2-5",
  "level": "2",
  "url": "tkchap4.html#tkOrderOp2-5",
  "type": "Checkpoint",
  "number": "A.4.8",
  "title": "",
  "body": "Simplify each expression. Do not use a calculator!         "
},
{
  "id": "tkOrderOp2-6",
  "level": "2",
  "url": "tkchap4.html#tkOrderOp2-6",
  "type": "Checkpoint",
  "number": "A.4.9",
  "title": "",
  "body": "Simplify each expression. Round your answer to hundredths.       "
},
{
  "id": "tkVertForm-3",
  "level": "2",
  "url": "tkchap4.html#tkVertForm-3",
  "type": "Example",
  "number": "A.4.10",
  "title": "",
  "body": "Graph the equation  The vertex is . We find the -intercept by setting : The -intercept is . We find the -intercepts by setting : The -intercepts are and . We plot these three points and sketch the parabola through them.  parabola "
},
{
  "id": "tkVertForm-4",
  "level": "2",
  "url": "tkchap4.html#tkVertForm-4",
  "type": "Checkpoint",
  "number": "A.4.11",
  "title": "",
  "body": "Find the vertex, the -intercept, and the -intercepts of , and sketch its graph. parabola "
},
{
  "id": "tkProdBin-3",
  "level": "2",
  "url": "tkchap4.html#tkProdBin-3",
  "type": "Example",
  "number": "A.4.12",
  "title": "",
  "body": "Multiply .  We apply the distributive law to multiply each term of the first factor by each term of the second factor. (The \"FOIL\" method.) "
},
{
  "id": "tkProdBin-4",
  "level": "2",
  "url": "tkchap4.html#tkProdBin-4",
  "type": "Example",
  "number": "A.4.13",
  "title": "",
  "body": "Expand .  Multiply  "
},
{
  "id": "tkProdBin-5",
  "level": "2",
  "url": "tkchap4.html#tkProdBin-5",
  "type": "Checkpoint",
  "number": "A.4.14",
  "title": "",
  "body": "Multiply . "
},
{
  "id": "tkProdBin-6",
  "level": "2",
  "url": "tkchap4.html#tkProdBin-6",
  "type": "Checkpoint",
  "number": "A.4.15",
  "title": "",
  "body": "Expand . "
},
{
  "id": "tkSolveforParam-3",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-3",
  "type": "Example",
  "number": "A.4.16",
  "title": "",
  "body": "The point lies on the graph of Solve for .  Substitute 6 for and 2 for , then solve for . The solution is . "
},
{
  "id": "tkSolveforParam-4",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-4",
  "type": "Example",
  "number": "A.4.17",
  "title": "",
  "body": "The point lies on the graph of Solve for .  Substitute -2 for and 11 for , then solve for . The solution is . "
},
{
  "id": "tkSolveforParam-5",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-5",
  "type": "Checkpoint",
  "number": "A.4.18",
  "title": "",
  "body": "The point lies on the graph of Solve for . "
},
{
  "id": "tkSolveforParam-6",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-6",
  "type": "Checkpoint",
  "number": "A.4.19",
  "title": "",
  "body": "The point lies on the graph of Solve for . "
},
{
  "id": "tkSolveforParam-7",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-7",
  "type": "Checkpoint",
  "number": "A.4.20",
  "title": "",
  "body": "The point lies on the graph of Solve for . "
},
{
  "id": "tkSolveforParam-8",
  "level": "2",
  "url": "tkchap4.html#tkSolveforParam-8",
  "type": "Checkpoint",
  "number": "A.4.21",
  "title": "",
  "body": "The point lies on the graph of Solve for . "
},
{
  "id": "tkPtOnGraph-3",
  "level": "2",
  "url": "tkchap4.html#tkPtOnGraph-3",
  "type": "Example",
  "number": "A.4.22",
  "title": "",
  "body": "Write an equation to say that lies on the graph of .  Substitute for and for .  "
},
{
  "id": "tkPtOnGraph-4",
  "level": "2",
  "url": "tkchap4.html#tkPtOnGraph-4",
  "type": "Checkpoint",
  "number": "A.4.23",
  "title": "",
  "body": "Write an equation to say that lies on the graph of .  "
},
{
  "id": "tkPtOnGraph-5",
  "level": "2",
  "url": "tkchap4.html#tkPtOnGraph-5",
  "type": "Checkpoint",
  "number": "A.4.24",
  "title": "",
  "body": "Write an equation to say that lies on the graph of .  "
},
{
  "id": "tkPtOnGraph-6",
  "level": "2",
  "url": "tkchap4.html#tkPtOnGraph-6",
  "type": "Checkpoint",
  "number": "A.4.25",
  "title": "",
  "body": "Write an equation to say that lies on the graph of .  "
},
{
  "id": "tkPtOnGraph-7",
  "level": "2",
  "url": "tkchap4.html#tkPtOnGraph-7",
  "type": "Checkpoint",
  "number": "A.4.26",
  "title": "",
  "body": "Write an equation to say that lies on the graph of .  "
},
{
  "id": "tkSolve2by2-3",
  "level": "2",
  "url": "tkchap4.html#tkSolve2by2-3",
  "type": "Example",
  "number": "A.4.27",
  "title": "",
  "body": "Solve the system by elimination.   To eliminate the -terms,look for the smallest integer that both 2 and 5 divide into evenly, namely, 10. Multiply the first equation by 2 and the second equation by . Add these new equations to obtain an equation in . Solve for to find . Finally, substitute into the first equation and solve for . The solution to the system is . "
},
{
  "id": "tkSolve2by2-4",
  "level": "2",
  "url": "tkchap4.html#tkSolve2by2-4",
  "type": "Checkpoint",
  "number": "A.4.28",
  "title": "",
  "body": "Solve the system by elimination.  "
},
{
  "id": "tkSolve2by2-5",
  "level": "2",
  "url": "tkchap4.html#tkSolve2by2-5",
  "type": "Checkpoint",
  "number": "A.4.29",
  "title": "",
  "body": "Solve the system by elimination.  "
},
{
  "id": "tkSpecSys-3",
  "level": "2",
  "url": "tkchap4.html#tkSpecSys-3",
  "type": "Example",
  "number": "A.4.30",
  "title": "",
  "body": "Solve the system by elimination.  Eliminate by subtracting (1) from (2), then eliminate again by subtracting (1) from (3), to get a 2x2 system: Divide the first equation by 3 and the second equation by 2, then add. We see that . Substituting into the equation , we find that . Finally, we substitue and into equation (1) to find The solution is , and .  "
},
{
  "id": "tkSpecSys-4",
  "level": "2",
  "url": "tkchap4.html#tkSpecSys-4",
  "type": "Checkpoint",
  "number": "A.4.31",
  "title": "",
  "body": "Solve the system by elimination. "
},
{
  "id": "tkLinIneq-3",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-3",
  "type": "Example",
  "number": "A.4.32",
  "title": "",
  "body": "Solve and graph the solutions on a number line.   The graph of the solutions is shown below.  number line  "
},
{
  "id": "tkLinIneq-4",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-4",
  "type": "Example",
  "number": "A.4.33",
  "title": "",
  "body": "Solve and graph the solutions on a number line.   The graph of the solutions is shown below.  number line  "
},
{
  "id": "tkLinIneq-5",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-5",
  "type": "Checkpoint",
  "number": "A.4.34",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkLinIneq-6",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-6",
  "type": "Checkpoint",
  "number": "A.4.35",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkLinIneq-7",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-7",
  "type": "Checkpoint",
  "number": "A.4.36",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkLinIneq-8",
  "level": "2",
  "url": "tkchap4.html#tkLinIneq-8",
  "type": "Checkpoint",
  "number": "A.4.37",
  "title": "",
  "body": "Solve the inequality  "
},
{
  "id": "tkIntParab-3",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-3",
  "type": "Example",
  "number": "A.4.38",
  "title": "",
  "body": "Find the -intercepts of the parabola  Set and solve for . Use extraction of roots. The -intercepts are and , or about and .  "
},
{
  "id": "tkIntParab-4",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-4",
  "type": "Example",
  "number": "A.4.39",
  "title": "",
  "body": "Find the -intercepts of the parabola  Set and solve for . Factor the right side. The -intercepts are and .  "
},
{
  "id": "tkIntParab-5",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-5",
  "type": "Example",
  "number": "A.4.40",
  "title": "",
  "body": "Find the -intercepts of the parabola  Set and solve for . Factor the right side. The -intercepts are and .  "
},
{
  "id": "tkIntParab-6",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-6",
  "type": "Example",
  "number": "A.4.41",
  "title": "",
  "body": "Find the -intercepts of the parabola  Set and solve for . Use the quadratic formula. The -intercepts are and , or about and .  "
},
{
  "id": "tkIntParab-8",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-8",
  "type": "Checkpoint",
  "number": "A.4.42",
  "title": "",
  "body": ""
},
{
  "id": "tkIntParab-9",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-9",
  "type": "Checkpoint",
  "number": "A.4.43",
  "title": "",
  "body": ", "
},
{
  "id": "tkIntParab-10",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-10",
  "type": "Checkpoint",
  "number": "A.4.44",
  "title": "",
  "body": ""
},
{
  "id": "tkIntParab-11",
  "level": "2",
  "url": "tkchap4.html#tkIntParab-11",
  "type": "Checkpoint",
  "number": "A.4.45",
  "title": "",
  "body": ""
},
{
  "id": "tkchap5",
  "level": "1",
  "url": "tkchap5.html",
  "type": "Section",
  "number": "A.5",
  "title": "Chapter 5 Functions",
  "body": "Chapter 5 Functions  Functions  New vocabulary  Write a definition or description for each term. You can find answers in Section 5.1 of your textbook.  Function  Input variable  Output variable  Function value  Function notation   Identify each term above, or give an example, for this situation: At time seconds, the height of a basketball above the ground, , in feet, is given by .  is a function of .  The input variable is .  The output variable is .  The function value for is .    1. Solve non-linear equations  To solve simple non-linear equations, we \"undo\" the operation performed on the variable.  Solve the equation  To \"undo\" a square root, we square both sides of the equation. First, we isolate the square root.   Solve the equation   If the variable is in the denominator of a fraction, we must first clear the fraction.   Solve the equation   Solve the equation     Graphs of Functions  Function notation  We can use function notation to describe a graph.  Fill in the blanks:  The point lies on the graph of if and only if .  Each point on the graph of has coordinates .  A graph of a function is increasing if the values get larger as we read from left to right.  The maximum value of a function is the of the highest point on the graph.   How do you know that the point lies on the graph of ? Because .  What are the coordinates of any point on the graph of ?   Solve graphically  Every point on the graph of an equation tells us the solution of the equation for a particular value of .  Use the graph of to solve the equation .   We see that has been replaced by in the equation for the graph. So we look for the point on the graph that has -coordinate .  This point, labeled on the graph at right, has -coordinate . Because it lies on the graph, the point is a solution of the equation .  line  But this statement also tells us that is a solution of the equation . You can check that substituting into this equation produces a true statement.  Use the graph of to solve the inequality .  We would like to find the -coordinates of all points on the graph that have -coordinate less than or equal to . These points on the graph are indicated by the heavy portion of the line.  The -coordinates of these points are shown by the heavy portion of the -axis. The solution is , or in interval notation, .  line  Use the graph to solve the equation or inequality. (Note the scales on the axes.) Show your solutions on the graph. Then verify your solutions by solving algebraically.     graph     Use the graph to solve the equation or inequality. (Note the scales on the axes.) Show your solutions on the graph. Then verify your solutions by solving algebraically.     graph       Some Basic Graphs  Evaluate cube roots  It is a good idea to become familiar with the first few perfect cubes: and so on.  Evaluate each cube root.        so  The cube root of a negative number is negative.  so  We can take the cube root of a fraction by taking the cube root of its numerator and denominator.   Use a calculator to evaluate the cube root. Round to thousandths.      On a scientific calculator, look for the key labeled . On a graphing calculator, press MATH  4       Evaluate . Round to thousandths.  Evaluate . Round to thousandths.   Evaluate absolute values  The definition of how to take an absolute value may look complicated, but it just says two things:  If the number is positive, leave it alone.  If the number is negative, put another negative in front, which will make the number positive.   Simplify each expression.       The absolute value of any number is positive (or zero). We can think of the absolute value of a number as its distnce from on a number line.  is 3 units from 0, so .  is the opposite of , so .  The opposite of is , so .  is the opposite of , so .   Suppose represents . Evaluate each expression.           Simplify .  Simplify .  Simplify .   Use the order of operations  Recall the order of operations:  Simplify what's inside parentheses (or absolute value bars) first.  Next evaluate all powers and roots.  Then perform all multiplications and divisions in order from left to right.  Finally, perform all additionas and subtractions in order from left to right.   Simplify  Absolute value bars are a grouping device. We simplify expressions within absolute value bars first.   Simplify  Simplify the expression under the radical first.   Simplify . Follow the order of operations.  Simplify . Follow the order of operations.    Direct Variation  Find the constant of variation  If we know the type of variation and the coordinates of one point ont the graph, we can find the variation equation.  Find the constant of variation and the variation equation:  varies directly with the square of , and when .  Because varies directly with the square of , we know that . We substitute the given values to find The constant of variation is 16, and the variation equation is .  Find the constant of variation and the variation equation:  varies directly with the cube of , and when . and   Sketch a variation graph  The graphs of direct variations are transformations of the basic graphs .  Sketch a graph of .  We know that the graph has the shape of the basic function , so all we need are a few points to \"anchor\" the graph. The graph is shown below.  cubic  Plot three points and sketch a graph of . , ,  parabola   Solve a variation equation  Solve  The equation is quadratic. We solve by extraction of roots.   Solve  This equation is cubic. We isolate the variable, then take cube roots.   Solve  Solve    Inverse Variation  Solve an inverse variation equation  Solve  We must first get the variable out of the denominator.   Solve  We must first get the variable out of the denominator.   Solve  Solve   Sketch a variation graph  The graphs of inverse variations are transformations of the basic graphs .  Sketch a graph of .  We know that the graph has the shape of the basic function , so all we need are a few points to \"anchor\" the graph. The graph is shown below.  cubic  Plot three points and sketch a graph of .  reciprocal squared  reciprocal squared   Find the constant of variation  If we know the type of variation and the coordinates of one point on the graph, we can find the variation equation.  Find the constant of variation and the variation equation:  varies inversely with the square of , and when .  Because varies inversely with the square of , we know that . We substitute the given values to find The constant of variation is 120, and the variation equation is .   Find the constant of variation and the variation equation:   varies inversely with , and when . and    Functions as Models  Properties of the basic functions  The eight basic functions are often used as models.  For these Examples, refer to the eight basic functions:  Which of the eight basic functions are always increasing?   Which of the eight basic functions are concave up for positive ?   Which of the eight basic functions are undefined at ?  Which of the eight basic functions are always non-negative?   Simplify absolute value functions  The piecewise definition of the absolute value function is To write the absolute value of some other algebraic expression, we replace by the expression wherever appears.  Simplify the function as a piecewise defined function.  We use the definition of absolute value and replace by . Then we simplify each expression.   Simplify the function as a piecewise defined function.   Simplify the function as a piecewise defined function.    Use interval notation  Recall that square brackets on an interval mean that the endpoints are included, and round brackets mean that the endpoints are not included.  Write each set with interval notation, and graph the set on a number line.        This is called a half-open or half-closed interval. is included in the interval, but is not included.  interval  We use round brackets next to the symbol because is not a specific number and is not included in the set.  interval  The word “or” describes the union of two sets. The symbol is used for union.  interval   interval   Write each set with interval notation, and graph the set on a number line.       interval   interval   interval   interval      "
},
{
  "id": "tkVocab-3",
  "level": "2",
  "url": "tkchap5.html#tkVocab-3",
  "type": "Checkpoint",
  "number": "A.5.1",
  "title": "",
  "body": "Identify each term above, or give an example, for this situation: At time seconds, the height of a basketball above the ground, , in feet, is given by .  is a function of .  The input variable is .  The output variable is .  The function value for is .  "
},
{
  "id": "tkNonLinEqn-3",
  "level": "2",
  "url": "tkchap5.html#tkNonLinEqn-3",
  "type": "Example",
  "number": "A.5.2",
  "title": "",
  "body": "Solve the equation  To \"undo\" a square root, we square both sides of the equation. First, we isolate the square root.  "
},
{
  "id": "tkNonLinEqn-4",
  "level": "2",
  "url": "tkchap5.html#tkNonLinEqn-4",
  "type": "Example",
  "number": "A.5.3",
  "title": "",
  "body": "Solve the equation   If the variable is in the denominator of a fraction, we must first clear the fraction.  "
},
{
  "id": "tkNonLinEqn-5",
  "level": "2",
  "url": "tkchap5.html#tkNonLinEqn-5",
  "type": "Checkpoint",
  "number": "A.5.4",
  "title": "",
  "body": "Solve the equation  "
},
{
  "id": "tkNonLinEqn-6",
  "level": "2",
  "url": "tkchap5.html#tkNonLinEqn-6",
  "type": "Checkpoint",
  "number": "A.5.5",
  "title": "",
  "body": "Solve the equation  "
},
{
  "id": "tkFncnNot-4",
  "level": "2",
  "url": "tkchap5.html#tkFncnNot-4",
  "type": "Checkpoint",
  "number": "A.5.6",
  "title": "",
  "body": "How do you know that the point lies on the graph of ? Because . "
},
{
  "id": "tkFncnNot-5",
  "level": "2",
  "url": "tkchap5.html#tkFncnNot-5",
  "type": "Checkpoint",
  "number": "A.5.7",
  "title": "",
  "body": "What are the coordinates of any point on the graph of ? "
},
{
  "id": "tkSolveGrph-3",
  "level": "2",
  "url": "tkchap5.html#tkSolveGrph-3",
  "type": "Example",
  "number": "A.5.8",
  "title": "",
  "body": "Use the graph of to solve the equation .   We see that has been replaced by in the equation for the graph. So we look for the point on the graph that has -coordinate .  This point, labeled on the graph at right, has -coordinate . Because it lies on the graph, the point is a solution of the equation .  line  But this statement also tells us that is a solution of the equation . You can check that substituting into this equation produces a true statement. "
},
{
  "id": "tkSolveGrph-4",
  "level": "2",
  "url": "tkchap5.html#tkSolveGrph-4",
  "type": "Example",
  "number": "A.5.9",
  "title": "",
  "body": "Use the graph of to solve the inequality .  We would like to find the -coordinates of all points on the graph that have -coordinate less than or equal to . These points on the graph are indicated by the heavy portion of the line.  The -coordinates of these points are shown by the heavy portion of the -axis. The solution is , or in interval notation, .  line "
},
{
  "id": "tkSolveGrph-5",
  "level": "2",
  "url": "tkchap5.html#tkSolveGrph-5",
  "type": "Checkpoint",
  "number": "A.5.10",
  "title": "",
  "body": "Use the graph to solve the equation or inequality. (Note the scales on the axes.) Show your solutions on the graph. Then verify your solutions by solving algebraically.     graph    "
},
{
  "id": "tkSolveGrph-6",
  "level": "2",
  "url": "tkchap5.html#tkSolveGrph-6",
  "type": "Checkpoint",
  "number": "A.5.11",
  "title": "",
  "body": "Use the graph to solve the equation or inequality. (Note the scales on the axes.) Show your solutions on the graph. Then verify your solutions by solving algebraically.     graph    "
},
{
  "id": "tkCubRt-3",
  "level": "2",
  "url": "tkchap5.html#tkCubRt-3",
  "type": "Example",
  "number": "A.5.12",
  "title": "",
  "body": "Evaluate each cube root.        so  The cube root of a negative number is negative.  so  We can take the cube root of a fraction by taking the cube root of its numerator and denominator.  "
},
{
  "id": "tkCubRt-4",
  "level": "2",
  "url": "tkchap5.html#tkCubRt-4",
  "type": "Example",
  "number": "A.5.13",
  "title": "",
  "body": "Use a calculator to evaluate the cube root. Round to thousandths.      On a scientific calculator, look for the key labeled . On a graphing calculator, press MATH  4      "
},
{
  "id": "tkCubRt-5",
  "level": "2",
  "url": "tkchap5.html#tkCubRt-5",
  "type": "Checkpoint",
  "number": "A.5.14",
  "title": "",
  "body": "Evaluate . Round to thousandths. "
},
{
  "id": "tkCubRt-6",
  "level": "2",
  "url": "tkchap5.html#tkCubRt-6",
  "type": "Checkpoint",
  "number": "A.5.15",
  "title": "",
  "body": "Evaluate . Round to thousandths. "
},
{
  "id": "tkAbsVal-3",
  "level": "2",
  "url": "tkchap5.html#tkAbsVal-3",
  "type": "Example",
  "number": "A.5.16",
  "title": "",
  "body": "Simplify each expression.       The absolute value of any number is positive (or zero). We can think of the absolute value of a number as its distnce from on a number line.  is 3 units from 0, so .  is the opposite of , so .  The opposite of is , so .  is the opposite of , so .  "
},
{
  "id": "tkAbsVal-4",
  "level": "2",
  "url": "tkchap5.html#tkAbsVal-4",
  "type": "Example",
  "number": "A.5.17",
  "title": "",
  "body": "Suppose represents . Evaluate each expression.          "
},
{
  "id": "tkAbsVal-5",
  "level": "2",
  "url": "tkchap5.html#tkAbsVal-5",
  "type": "Checkpoint",
  "number": "A.5.18",
  "title": "",
  "body": "Simplify . "
},
{
  "id": "tkAbsVal-6",
  "level": "2",
  "url": "tkchap5.html#tkAbsVal-6",
  "type": "Checkpoint",
  "number": "A.5.19",
  "title": "",
  "body": "Simplify . "
},
{
  "id": "tkAbsVal-7",
  "level": "2",
  "url": "tkchap5.html#tkAbsVal-7",
  "type": "Checkpoint",
  "number": "A.5.20",
  "title": "",
  "body": "Simplify . "
},
{
  "id": "tkOrderOp-3",
  "level": "2",
  "url": "tkchap5.html#tkOrderOp-3",
  "type": "Example",
  "number": "A.5.21",
  "title": "",
  "body": "Simplify  Absolute value bars are a grouping device. We simplify expressions within absolute value bars first.  "
},
{
  "id": "tkOrderOp-4",
  "level": "2",
  "url": "tkchap5.html#tkOrderOp-4",
  "type": "Example",
  "number": "A.5.22",
  "title": "",
  "body": "Simplify  Simplify the expression under the radical first.  "
},
{
  "id": "tkOrderOp-5",
  "level": "2",
  "url": "tkchap5.html#tkOrderOp-5",
  "type": "Checkpoint",
  "number": "A.5.23",
  "title": "",
  "body": "Simplify . Follow the order of operations. "
},
{
  "id": "tkOrderOp-6",
  "level": "2",
  "url": "tkchap5.html#tkOrderOp-6",
  "type": "Checkpoint",
  "number": "A.5.24",
  "title": "",
  "body": "Simplify . Follow the order of operations. "
},
{
  "id": "tkConVar-3",
  "level": "2",
  "url": "tkchap5.html#tkConVar-3",
  "type": "Example",
  "number": "A.5.25",
  "title": "",
  "body": "Find the constant of variation and the variation equation:  varies directly with the square of , and when .  Because varies directly with the square of , we know that . We substitute the given values to find The constant of variation is 16, and the variation equation is . "
},
{
  "id": "tkConVar-4",
  "level": "2",
  "url": "tkchap5.html#tkConVar-4",
  "type": "Checkpoint",
  "number": "A.5.26",
  "title": "",
  "body": "Find the constant of variation and the variation equation:  varies directly with the cube of , and when . and "
},
{
  "id": "tkVarGraph-3",
  "level": "2",
  "url": "tkchap5.html#tkVarGraph-3",
  "type": "Example",
  "number": "A.5.27",
  "title": "",
  "body": "Sketch a graph of .  We know that the graph has the shape of the basic function , so all we need are a few points to \"anchor\" the graph. The graph is shown below.  cubic "
},
{
  "id": "tkVarGraph-4",
  "level": "2",
  "url": "tkchap5.html#tkVarGraph-4",
  "type": "Checkpoint",
  "number": "A.5.28",
  "title": "",
  "body": "Plot three points and sketch a graph of . , ,  parabola "
},
{
  "id": "tkVarEqn-2",
  "level": "2",
  "url": "tkchap5.html#tkVarEqn-2",
  "type": "Example",
  "number": "A.5.29",
  "title": "",
  "body": "Solve  The equation is quadratic. We solve by extraction of roots.  "
},
{
  "id": "tkVarEqn-3",
  "level": "2",
  "url": "tkchap5.html#tkVarEqn-3",
  "type": "Example",
  "number": "A.5.30",
  "title": "",
  "body": "Solve  This equation is cubic. We isolate the variable, then take cube roots.  "
},
{
  "id": "tkVarEqn-4",
  "level": "2",
  "url": "tkchap5.html#tkVarEqn-4",
  "type": "Checkpoint",
  "number": "A.5.31",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkVarEqn-5",
  "level": "2",
  "url": "tkchap5.html#tkVarEqn-5",
  "type": "Checkpoint",
  "number": "A.5.32",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkInvVar-2",
  "level": "2",
  "url": "tkchap5.html#tkInvVar-2",
  "type": "Example",
  "number": "A.5.33",
  "title": "",
  "body": "Solve  We must first get the variable out of the denominator.  "
},
{
  "id": "tkInvVar-3",
  "level": "2",
  "url": "tkchap5.html#tkInvVar-3",
  "type": "Example",
  "number": "A.5.34",
  "title": "",
  "body": "Solve  We must first get the variable out of the denominator.  "
},
{
  "id": "tkInvVar-4",
  "level": "2",
  "url": "tkchap5.html#tkInvVar-4",
  "type": "Checkpoint",
  "number": "A.5.35",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkInvVar-5",
  "level": "2",
  "url": "tkchap5.html#tkInvVar-5",
  "type": "Checkpoint",
  "number": "A.5.36",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSketchVar-3",
  "level": "2",
  "url": "tkchap5.html#tkSketchVar-3",
  "type": "Example",
  "number": "A.5.37",
  "title": "",
  "body": "Sketch a graph of .  We know that the graph has the shape of the basic function , so all we need are a few points to \"anchor\" the graph. The graph is shown below.  cubic "
},
{
  "id": "tkSketchVar-4",
  "level": "2",
  "url": "tkchap5.html#tkSketchVar-4",
  "type": "Checkpoint",
  "number": "A.5.38",
  "title": "",
  "body": "Plot three points and sketch a graph of .  reciprocal squared  reciprocal squared "
},
{
  "id": "tkFindCon-3",
  "level": "2",
  "url": "tkchap5.html#tkFindCon-3",
  "type": "Example",
  "number": "A.5.39",
  "title": "",
  "body": "Find the constant of variation and the variation equation:  varies inversely with the square of , and when .  Because varies inversely with the square of , we know that . We substitute the given values to find The constant of variation is 120, and the variation equation is .  "
},
{
  "id": "tkFindCon-4",
  "level": "2",
  "url": "tkchap5.html#tkFindCon-4",
  "type": "Checkpoint",
  "number": "A.5.40",
  "title": "",
  "body": "Find the constant of variation and the variation equation:   varies inversely with , and when . and "
},
{
  "id": "tkBasicProp-4",
  "level": "2",
  "url": "tkchap5.html#tkBasicProp-4",
  "type": "Example",
  "number": "A.5.41",
  "title": "",
  "body": "Which of the eight basic functions are always increasing?  "
},
{
  "id": "tkBasicProp-5",
  "level": "2",
  "url": "tkchap5.html#tkBasicProp-5",
  "type": "Example",
  "number": "A.5.42",
  "title": "",
  "body": "Which of the eight basic functions are concave up for positive ?  "
},
{
  "id": "tkBasicProp-6",
  "level": "2",
  "url": "tkchap5.html#tkBasicProp-6",
  "type": "Checkpoint",
  "number": "A.5.43",
  "title": "",
  "body": "Which of the eight basic functions are undefined at ? "
},
{
  "id": "tkBasicProp-7",
  "level": "2",
  "url": "tkchap5.html#tkBasicProp-7",
  "type": "Checkpoint",
  "number": "A.5.44",
  "title": "",
  "body": "Which of the eight basic functions are always non-negative? "
},
{
  "id": "tkAbsValue-3",
  "level": "2",
  "url": "tkchap5.html#tkAbsValue-3",
  "type": "Example",
  "number": "A.5.45",
  "title": "",
  "body": "Simplify the function as a piecewise defined function.  We use the definition of absolute value and replace by . Then we simplify each expression.  "
},
{
  "id": "tkAbsValue-4",
  "level": "2",
  "url": "tkchap5.html#tkAbsValue-4",
  "type": "Checkpoint",
  "number": "A.5.46",
  "title": "",
  "body": "Simplify the function as a piecewise defined function.  "
},
{
  "id": "tkAbsValue-5",
  "level": "2",
  "url": "tkchap5.html#tkAbsValue-5",
  "type": "Checkpoint",
  "number": "A.5.47",
  "title": "",
  "body": "Simplify the function as a piecewise defined function.  "
},
{
  "id": "tkIntNot-3",
  "level": "2",
  "url": "tkchap5.html#tkIntNot-3",
  "type": "Example",
  "number": "A.5.48",
  "title": "",
  "body": "Write each set with interval notation, and graph the set on a number line.        This is called a half-open or half-closed interval. is included in the interval, but is not included.  interval  We use round brackets next to the symbol because is not a specific number and is not included in the set.  interval  The word “or” describes the union of two sets. The symbol is used for union.  interval   interval  "
},
{
  "id": "tkIntNot-4",
  "level": "2",
  "url": "tkchap5.html#tkIntNot-4",
  "type": "Checkpoint",
  "number": "A.5.49",
  "title": "",
  "body": "Write each set with interval notation, and graph the set on a number line.       interval   interval   interval   interval  "
},
{
  "id": "tkchap6",
  "level": "1",
  "url": "tkchap6.html",
  "type": "Section",
  "number": "A.6",
  "title": "Chapter 6 Powers and Roots",
  "body": "Chapter 6 Powers and Roots  Integer Exponents  Evaluate powers with negative exponents  Remember that a negative exponent indicates a reciprocal, so for example A negative exponent does not mean that the power is negative. So for example ; does not mean .  Write each expression without using negative exponents.      , or .  To compute a negative power of a fraction, we compute the corresponding positive power of its reciprocal. Thus,   Write each expression using negative exponents.         Write each expression using negative exponents and evaluate.        Write each expression using negative exponents.         Use the laws of exponents  Recall the five Laws of Exponents.  Laws of Exponents         Multiply .  Rearrange the factors to group together the numerical coefficients and the powers of each base. Multiply the coefficients together, and use the first law of exponents to find the products of the variable factors.   Divide .  Consider the numerical coefficients and the powers of each base separately. Use the second law of exponents to simplify each quotient of powers.   Simplify .  Apply the fourth law of exponents and square each factor.   Simplify .  Apply the fifth law of exponents.   Multiply .  Divide .  Simplify .  Simplify .   Use scientific notation  If we move the decimal point to the left, we are making a number smaller, so we must multiply by a positive power of 10 to compensate. If we move the decimal point to the right, we must multiply by a negative power of 10.  Write each number in scientific notation.      First, we position the decimal point so that there is just one nonzero digit to the left of the decimal. To recover from , we must move the decimal point seven places to the right. Therefore, we multiply by .  First, we position the decimal point so that there is just one nonzero digit to the left of the decimal. To recover from , we must move the decimal point seven places to the right. Therefore, we multiply by .   Write each number in scientific notation.  The largest living animal is the blue whale, with an average weight of grams.  The smallest animal is the fairy fly beetle, which weighs about grams.        Roots and Radicals  Use the definition of root  Because it is also true that .  Simplify. Do not use a calculator!     By the definition of square root, is a number whose square is .     Simplify. Do not use a calculator!     By the definition of cube root, is a number whose cube is .     Simplify. Do not use a calculator!         Simplify. Do not use a calculator!        Simplify. Do not use a calculator!        Simplify. Do not use a calculator!         Irrational numbers  Rational numbers are the integers and common fractions; we can represent them precisely in decimal form. But the best we can do for an irrational number is to write an approximate decimal form by rounding.  Identify each number as rational or irrational.        Irrational: is not the quotient of two integers.  Rational: is the quotient of two integers.  Rational: is an integer.  Irrational: , but is irrational.   Give a decimal approximation rounded to thousandths.      Use a calculator to evaluate.  Enter  ENTER and round to three decimal places:  Enter (-)        ENTER and round to three decimal places:  Enter   MATH  4   ENTER and round to three decimal places:   Identify each number as rational or irrational.       Irrational  Irrational  Rational  Irrational   Give a decimal approximation rounded to thousandths.           Using exponents and roots  Be careful to avoid tempting but false operations with exponents and roots.  Which equation is a correct application of the laws of exponents?  or  or    The first statement is not correct. There is no law that says is equivalent to , so is not equivalent to or .  However, it is true that , so in particular the second statement is true:  The first statement is correct. If we start with , we can apply the third law, , to find .  In the second statement, 6.8 is not raised to power , so we cannot multiply 6.8 times 10.   Decide whether each equation is a correct application of the laws of exponents. Write a correct statement if possible.  Not correct  Not correct.  Correct  Not correct, but  Properties of Radicals  Product Rule  Quotient Rule  In general, it is not true that is equivalent to , or that is equivalent to .  Which equation is a correct application of the properties of radicals?  or  or     The first statement is incorrect. There is no property that says .  However, it is true that , so the second statement is correct.  The first statement is incorrect, because is not equivalent to .  The second statement is correct, because .   Decide whether each equation is a correct application of the properties of radicals. Write a correct statement if possible.  Not correct  Correct  Not correct.  Correct    Rational Exponents  Operations on fractions  When working with rational exponents, we often need to perform operations on fractions.  Add  The LCD for the fractions is 8, so we build the first fraction: Then we combine like fractions:  Subtract  The LCD for the fractions is 12, so we build each fraction: Then we combine like fractions:  Multiply  We multiply numerators together, and multiply denominators together: Then we reduce:  Add  Subtract  Multiply   Convert between fractions and decimals  Rational exponents may also be written in decimal form.  Convert to a common fraction.  The numerator of the fraction is 016, or 16. The last digit, 6, is in the thousandths place, so the denominator of the fraction is 1000. Thus, . We can reduce this fraction by dividing top and bottom by 8:   Convert to a decimal fraction.  Using a calculator, divide 5 by 16:      Convert to a decimal fraction.  Using a calculator, divide 5 by 11:      This is a nonterminating decimal, which we indicate by a repeater bar:   Convert to a common fraction.  Convert to a common fraction.  Convert to a decimal fraction.   Solve equations  To solve an equation of the form , we can raise both sides to the reciprocal of the exponent: because .  Solve . Round your answer to hundredths.  First, we isolate the power. We raise both sides to the reciprocal of the power. To evaluate , enter   ENTER  Solve .  First, we isolate the power. We raise both sides to the reciprocal of the power. Or we can evaluate by entering    ENTER  Solve . Round your answer to thousandths.  First, we isolate the power. We raise both sides to the reciprocal of the power. We evaluate by entering        ENTER  Solve . Round your answer to thousandths.  Solve . Round your answer to thousandths.  Solve . Round your answer to thousandths.    Working with Radicals  Perfect squares  To simplify a radical, we factor out the largest perfect square.  Find the missiing factor.  ?  ?    We mentally divide by to find . The missing factor is .  We mentally divide each term by to find and . The missing factor is .   Factor out the largest perfect square.     By trial and error, we find that 36 is the largest square that divides 108. From each power, we can factor out the power with the largest possible even exponent, namely and . Thus, we factor out to find .  The largest even power that divides into both and is , so we factor from the numerator: The largest perfect square that divides into the denominator is 4. Thus, we factor out from the fraction to find   Find the missiing factor.  ?  ?      Factor out the largest perfect square.          Apply properties of radicals  We have a Product Rule and a Quotient Rule for radicals.  Rules for Radicals     Decide whether each statement is true or false. Then use a calculator to verify your answer.      Yes: we can multiply (or divide) radicals together, if they have the same index. You can check that , and rounded to four decimal places.  No: we cannot combine radicals with addition or subtraction. You can check that , but .   Find and correct the error in each calculation.      We cannot split radicals with addition or subtraction; we must follow the order of operations:  We cannot combine radicals with addition or subtraction. However, we can add like terms:   Decide whether each statement is true or false. Then use a calculator to verify your answer.       False  True  False  True   Find and correct the error in each calculation.        cannot be simplified  cannot be simplified  cannot be simplified    Simplify radicals  We simplify square roots by factoring out any perfect squares.  Simplify  The largest perfect square that divides evenly into 45 is 9, so we factor 45 as . We use the product rule to write Finally, we simplify to get  Simplify  The largest perfect square that divides 20 is 4. We write the radicand as the product of two factors, one containing the perfect square and the largest possible even powers of the variables. That is, Then we write the radical as a product. Finally, we simplify the first of the two factors to find  Simplify  Simplify   Rationalize the denominator  Rationalizing the denominator of a fraction helps maintain accuracy.  Simplify  We can rationalize the denominator by multiplying mumerator and denominator by : or we can divide 3 by to get . (Remember that .)   Combine  The LCD for the two fractions is 2, and the building factor for the first fraction is .   Simplify  Simplify  Simplify  Simplify    Radical Equations  Solve radical equations  To solve a simple radical equation, we raise both sides to the index of the radical.  Solve  We square both sides of the equation to produce an equation without radicals. You can check that satisfies the original equation.  Solve  We first isolate the cube root. Next, we undo the cube root by cubing both sides of the equation. Finally, we add 4 to both sides to find the solution, . We do not have to check for extraneous solutions when we cube both sides of an equation, but it is a good idea to check the solution for accuracy anyway.  Check: We substitute for into the left side of the equation. The solutions checks.  Solve  Solve   Square binomials containing radicals  We may encounter binomials when squaring both sides of an equation.  Expand  , so we apply \"FOIL\" to get  Expand  We multiply to get  Expand  Expand   Use absolute value  Explain why is not true for all values of .  Recall that the symbol means the non-negative square root of . If is a negative number, for example , then , and not , not . So if is a negative number, In fact, .   For what values of is ?  when is positive or zero, that is for . If , then is negative. But the symbol returns only the positive root, so we use absolute value bars to indicate that the root is positive:  For what values of is ?  For what values of is ?    "
},
{
  "id": "tkNegExp-3",
  "level": "2",
  "url": "tkchap6.html#tkNegExp-3",
  "type": "Example",
  "number": "A.6.1",
  "title": "",
  "body": "Write each expression without using negative exponents.      , or .  To compute a negative power of a fraction, we compute the corresponding positive power of its reciprocal. Thus,  "
},
{
  "id": "tkNegExp-4",
  "level": "2",
  "url": "tkchap6.html#tkNegExp-4",
  "type": "Example",
  "number": "A.6.2",
  "title": "",
  "body": "Write each expression using negative exponents.        "
},
{
  "id": "tkNegExp-5",
  "level": "2",
  "url": "tkchap6.html#tkNegExp-5",
  "type": "Checkpoint",
  "number": "A.6.3",
  "title": "",
  "body": "Write each expression using negative exponents and evaluate.       "
},
{
  "id": "tkNegExp-6",
  "level": "2",
  "url": "tkchap6.html#tkNegExp-6",
  "type": "Checkpoint",
  "number": "A.6.4",
  "title": "",
  "body": "Write each expression using negative exponents.       "
},
{
  "id": "tkExplaws-4",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-4",
  "type": "Example",
  "number": "A.6.5",
  "title": "",
  "body": "Multiply .  Rearrange the factors to group together the numerical coefficients and the powers of each base. Multiply the coefficients together, and use the first law of exponents to find the products of the variable factors.  "
},
{
  "id": "tkExplaws-5",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-5",
  "type": "Example",
  "number": "A.6.6",
  "title": "",
  "body": "Divide .  Consider the numerical coefficients and the powers of each base separately. Use the second law of exponents to simplify each quotient of powers.  "
},
{
  "id": "tkExplaws-6",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-6",
  "type": "Example",
  "number": "A.6.7",
  "title": "",
  "body": "Simplify .  Apply the fourth law of exponents and square each factor.  "
},
{
  "id": "tkExplaws-7",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-7",
  "type": "Example",
  "number": "A.6.8",
  "title": "",
  "body": "Simplify .  Apply the fifth law of exponents.  "
},
{
  "id": "tkExplaws-8",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-8",
  "type": "Checkpoint",
  "number": "A.6.9",
  "title": "",
  "body": "Multiply . "
},
{
  "id": "tkExplaws-9",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-9",
  "type": "Checkpoint",
  "number": "A.6.10",
  "title": "",
  "body": "Divide . "
},
{
  "id": "tkExplaws-10",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-10",
  "type": "Checkpoint",
  "number": "A.6.11",
  "title": "",
  "body": "Simplify . "
},
{
  "id": "tkExplaws-11",
  "level": "2",
  "url": "tkchap6.html#tkExplaws-11",
  "type": "Checkpoint",
  "number": "A.6.12",
  "title": "",
  "body": "Simplify . "
},
{
  "id": "tkSciNot-3",
  "level": "2",
  "url": "tkchap6.html#tkSciNot-3",
  "type": "Example",
  "number": "A.6.13",
  "title": "",
  "body": "Write each number in scientific notation.      First, we position the decimal point so that there is just one nonzero digit to the left of the decimal. To recover from , we must move the decimal point seven places to the right. Therefore, we multiply by .  First, we position the decimal point so that there is just one nonzero digit to the left of the decimal. To recover from , we must move the decimal point seven places to the right. Therefore, we multiply by .  "
},
{
  "id": "tkSciNot-4",
  "level": "2",
  "url": "tkchap6.html#tkSciNot-4",
  "type": "Checkpoint",
  "number": "A.6.14",
  "title": "",
  "body": "Write each number in scientific notation.  The largest living animal is the blue whale, with an average weight of grams.  The smallest animal is the fairy fly beetle, which weighs about grams.     "
},
{
  "id": "tkDefRoot-3",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-3",
  "type": "Example",
  "number": "A.6.15",
  "title": "",
  "body": "Simplify. Do not use a calculator!     By the definition of square root, is a number whose square is .    "
},
{
  "id": "tkDefRoot-4",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-4",
  "type": "Example",
  "number": "A.6.16",
  "title": "",
  "body": "Simplify. Do not use a calculator!     By the definition of cube root, is a number whose cube is .    "
},
{
  "id": "tkDefRoot-5",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-5",
  "type": "Example",
  "number": "A.6.17",
  "title": "",
  "body": "Simplify. Do not use a calculator!        "
},
{
  "id": "tkDefRoot-6",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-6",
  "type": "Checkpoint",
  "number": "A.6.18",
  "title": "",
  "body": "Simplify. Do not use a calculator!       "
},
{
  "id": "tkDefRoot-7",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-7",
  "type": "Checkpoint",
  "number": "A.6.19",
  "title": "",
  "body": "Simplify. Do not use a calculator!       "
},
{
  "id": "tkDefRoot-8",
  "level": "2",
  "url": "tkchap6.html#tkDefRoot-8",
  "type": "Checkpoint",
  "number": "A.6.20",
  "title": "",
  "body": "Simplify. Do not use a calculator!       "
},
{
  "id": "tkRatNos-3",
  "level": "2",
  "url": "tkchap6.html#tkRatNos-3",
  "type": "Example",
  "number": "A.6.21",
  "title": "",
  "body": "Identify each number as rational or irrational.        Irrational: is not the quotient of two integers.  Rational: is the quotient of two integers.  Rational: is an integer.  Irrational: , but is irrational.  "
},
{
  "id": "tkRatNos-4",
  "level": "2",
  "url": "tkchap6.html#tkRatNos-4",
  "type": "Example",
  "number": "A.6.22",
  "title": "",
  "body": "Give a decimal approximation rounded to thousandths.      Use a calculator to evaluate.  Enter  ENTER and round to three decimal places:  Enter (-)        ENTER and round to three decimal places:  Enter   MATH  4   ENTER and round to three decimal places:  "
},
{
  "id": "tkRatNos-5",
  "level": "2",
  "url": "tkchap6.html#tkRatNos-5",
  "type": "Checkpoint",
  "number": "A.6.23",
  "title": "",
  "body": "Identify each number as rational or irrational.       Irrational  Irrational  Rational  Irrational  "
},
{
  "id": "tkRatNos-6",
  "level": "2",
  "url": "tkchap6.html#tkRatNos-6",
  "type": "Checkpoint",
  "number": "A.6.24",
  "title": "",
  "body": "Give a decimal approximation rounded to thousandths.         "
},
{
  "id": "tkMistakes-3",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-3",
  "type": "Example",
  "number": "A.6.25",
  "title": "",
  "body": "Which equation is a correct application of the laws of exponents?  or  or    The first statement is not correct. There is no law that says is equivalent to , so is not equivalent to or .  However, it is true that , so in particular the second statement is true:  The first statement is correct. If we start with , we can apply the third law, , to find .  In the second statement, 6.8 is not raised to power , so we cannot multiply 6.8 times 10.  "
},
{
  "id": "tkMistakes-5",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-5",
  "type": "Checkpoint",
  "number": "A.6.26",
  "title": "",
  "body": "Not correct "
},
{
  "id": "tkMistakes-6",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-6",
  "type": "Checkpoint",
  "number": "A.6.27",
  "title": "",
  "body": "Not correct. "
},
{
  "id": "tkMistakes-7",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-7",
  "type": "Checkpoint",
  "number": "A.6.28",
  "title": "",
  "body": "Correct "
},
{
  "id": "tkMistakes-8",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-8",
  "type": "Checkpoint",
  "number": "A.6.29",
  "title": "",
  "body": "Not correct, but "
},
{
  "id": "tkMistakes-10",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-10",
  "type": "Example",
  "number": "A.6.30",
  "title": "",
  "body": "Which equation is a correct application of the properties of radicals?  or  or     The first statement is incorrect. There is no property that says .  However, it is true that , so the second statement is correct.  The first statement is incorrect, because is not equivalent to .  The second statement is correct, because .  "
},
{
  "id": "tkMistakes-12",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-12",
  "type": "Checkpoint",
  "number": "A.6.31",
  "title": "",
  "body": "Not correct "
},
{
  "id": "tkMistakes-13",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-13",
  "type": "Checkpoint",
  "number": "A.6.32",
  "title": "",
  "body": "Correct "
},
{
  "id": "tkMistakes-14",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-14",
  "type": "Checkpoint",
  "number": "A.6.33",
  "title": "",
  "body": "Not correct. "
},
{
  "id": "tkMistakes-15",
  "level": "2",
  "url": "tkchap6.html#tkMistakes-15",
  "type": "Checkpoint",
  "number": "A.6.34",
  "title": "",
  "body": "Correct "
},
{
  "id": "tkFracOps-3",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-3",
  "type": "Example",
  "number": "A.6.35",
  "title": "",
  "body": "Add  The LCD for the fractions is 8, so we build the first fraction: Then we combine like fractions: "
},
{
  "id": "tkFracOps-4",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-4",
  "type": "Example",
  "number": "A.6.36",
  "title": "",
  "body": "Subtract  The LCD for the fractions is 12, so we build each fraction: Then we combine like fractions: "
},
{
  "id": "tkFracOps-5",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-5",
  "type": "Example",
  "number": "A.6.37",
  "title": "",
  "body": "Multiply  We multiply numerators together, and multiply denominators together: Then we reduce: "
},
{
  "id": "tkFracOps-6",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-6",
  "type": "Checkpoint",
  "number": "A.6.38",
  "title": "",
  "body": "Add "
},
{
  "id": "tkFracOps-7",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-7",
  "type": "Checkpoint",
  "number": "A.6.39",
  "title": "",
  "body": "Subtract "
},
{
  "id": "tkFracOps-8",
  "level": "2",
  "url": "tkchap6.html#tkFracOps-8",
  "type": "Checkpoint",
  "number": "A.6.40",
  "title": "",
  "body": "Multiply "
},
{
  "id": "tkFractoDec-3",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-3",
  "type": "Example",
  "number": "A.6.41",
  "title": "",
  "body": "Convert to a common fraction.  The numerator of the fraction is 016, or 16. The last digit, 6, is in the thousandths place, so the denominator of the fraction is 1000. Thus, . We can reduce this fraction by dividing top and bottom by 8:  "
},
{
  "id": "tkFractoDec-4",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-4",
  "type": "Example",
  "number": "A.6.42",
  "title": "",
  "body": "Convert to a decimal fraction.  Using a calculator, divide 5 by 16:     "
},
{
  "id": "tkFractoDec-5",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-5",
  "type": "Example",
  "number": "A.6.43",
  "title": "",
  "body": "Convert to a decimal fraction.  Using a calculator, divide 5 by 11:      This is a nonterminating decimal, which we indicate by a repeater bar:  "
},
{
  "id": "tkFractoDec-6",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-6",
  "type": "Checkpoint",
  "number": "A.6.44",
  "title": "",
  "body": "Convert to a common fraction. "
},
{
  "id": "tkFractoDec-7",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-7",
  "type": "Checkpoint",
  "number": "A.6.45",
  "title": "",
  "body": "Convert to a common fraction. "
},
{
  "id": "tkFractoDec-8",
  "level": "2",
  "url": "tkchap6.html#tkFractoDec-8",
  "type": "Checkpoint",
  "number": "A.6.46",
  "title": "",
  "body": "Convert to a decimal fraction. "
},
{
  "id": "tkFracExpEqn-3",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-3",
  "type": "Example",
  "number": "A.6.47",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  First, we isolate the power. We raise both sides to the reciprocal of the power. To evaluate , enter   ENTER "
},
{
  "id": "tkFracExpEqn-4",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-4",
  "type": "Example",
  "number": "A.6.48",
  "title": "",
  "body": "Solve .  First, we isolate the power. We raise both sides to the reciprocal of the power. Or we can evaluate by entering    ENTER "
},
{
  "id": "tkFracExpEqn-5",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-5",
  "type": "Example",
  "number": "A.6.49",
  "title": "",
  "body": "Solve . Round your answer to thousandths.  First, we isolate the power. We raise both sides to the reciprocal of the power. We evaluate by entering        ENTER "
},
{
  "id": "tkFracExpEqn-6",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-6",
  "type": "Checkpoint",
  "number": "A.6.50",
  "title": "",
  "body": "Solve . Round your answer to thousandths. "
},
{
  "id": "tkFracExpEqn-7",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-7",
  "type": "Checkpoint",
  "number": "A.6.51",
  "title": "",
  "body": "Solve . Round your answer to thousandths. "
},
{
  "id": "tkFracExpEqn-8",
  "level": "2",
  "url": "tkchap6.html#tkFracExpEqn-8",
  "type": "Checkpoint",
  "number": "A.6.52",
  "title": "",
  "body": "Solve . Round your answer to thousandths. "
},
{
  "id": "tkPerfSq-3",
  "level": "2",
  "url": "tkchap6.html#tkPerfSq-3",
  "type": "Example",
  "number": "A.6.53",
  "title": "",
  "body": "Find the missiing factor.  ?  ?    We mentally divide by to find . The missing factor is .  We mentally divide each term by to find and . The missing factor is .  "
},
{
  "id": "tkPerfSq-4",
  "level": "2",
  "url": "tkchap6.html#tkPerfSq-4",
  "type": "Example",
  "number": "A.6.54",
  "title": "",
  "body": "Factor out the largest perfect square.     By trial and error, we find that 36 is the largest square that divides 108. From each power, we can factor out the power with the largest possible even exponent, namely and . Thus, we factor out to find .  The largest even power that divides into both and is , so we factor from the numerator: The largest perfect square that divides into the denominator is 4. Thus, we factor out from the fraction to find  "
},
{
  "id": "tkPerfSq-5",
  "level": "2",
  "url": "tkchap6.html#tkPerfSq-5",
  "type": "Checkpoint",
  "number": "A.6.55",
  "title": "",
  "body": "Find the missiing factor.  ?  ?     "
},
{
  "id": "tkPerfSq-6",
  "level": "2",
  "url": "tkchap6.html#tkPerfSq-6",
  "type": "Checkpoint",
  "number": "A.6.56",
  "title": "",
  "body": "Factor out the largest perfect square.        "
},
{
  "id": "tkRadProps-4",
  "level": "2",
  "url": "tkchap6.html#tkRadProps-4",
  "type": "Example",
  "number": "A.6.57",
  "title": "",
  "body": "Decide whether each statement is true or false. Then use a calculator to verify your answer.      Yes: we can multiply (or divide) radicals together, if they have the same index. You can check that , and rounded to four decimal places.  No: we cannot combine radicals with addition or subtraction. You can check that , but .  "
},
{
  "id": "tkRadProps-5",
  "level": "2",
  "url": "tkchap6.html#tkRadProps-5",
  "type": "Example",
  "number": "A.6.58",
  "title": "",
  "body": "Find and correct the error in each calculation.      We cannot split radicals with addition or subtraction; we must follow the order of operations:  We cannot combine radicals with addition or subtraction. However, we can add like terms:  "
},
{
  "id": "tkRadProps-6",
  "level": "2",
  "url": "tkchap6.html#tkRadProps-6",
  "type": "Checkpoint",
  "number": "A.6.59",
  "title": "",
  "body": "Decide whether each statement is true or false. Then use a calculator to verify your answer.       False  True  False  True  "
},
{
  "id": "tkRadProps-7",
  "level": "2",
  "url": "tkchap6.html#tkRadProps-7",
  "type": "Checkpoint",
  "number": "A.6.60",
  "title": "",
  "body": "Find and correct the error in each calculation.        cannot be simplified  cannot be simplified  cannot be simplified  "
},
{
  "id": "tkSimpRad-3",
  "level": "2",
  "url": "tkchap6.html#tkSimpRad-3",
  "type": "Example",
  "number": "A.6.61",
  "title": "",
  "body": "Simplify  The largest perfect square that divides evenly into 45 is 9, so we factor 45 as . We use the product rule to write Finally, we simplify to get "
},
{
  "id": "tkSimpRad-4",
  "level": "2",
  "url": "tkchap6.html#tkSimpRad-4",
  "type": "Example",
  "number": "A.6.62",
  "title": "",
  "body": "Simplify  The largest perfect square that divides 20 is 4. We write the radicand as the product of two factors, one containing the perfect square and the largest possible even powers of the variables. That is, Then we write the radical as a product. Finally, we simplify the first of the two factors to find "
},
{
  "id": "tkSimpRad-5",
  "level": "2",
  "url": "tkchap6.html#tkSimpRad-5",
  "type": "Checkpoint",
  "number": "A.6.63",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkSimpRad-6",
  "level": "2",
  "url": "tkchap6.html#tkSimpRad-6",
  "type": "Checkpoint",
  "number": "A.6.64",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkRatDenom-3",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-3",
  "type": "Example",
  "number": "A.6.65",
  "title": "",
  "body": "Simplify  We can rationalize the denominator by multiplying mumerator and denominator by : or we can divide 3 by to get . (Remember that .)  "
},
{
  "id": "tkRatDenom-4",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-4",
  "type": "Example",
  "number": "A.6.66",
  "title": "",
  "body": "Combine  The LCD for the two fractions is 2, and the building factor for the first fraction is .  "
},
{
  "id": "tkRatDenom-5",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-5",
  "type": "Checkpoint",
  "number": "A.6.67",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkRatDenom-6",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-6",
  "type": "Checkpoint",
  "number": "A.6.68",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkRatDenom-7",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-7",
  "type": "Checkpoint",
  "number": "A.6.69",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkRatDenom-8",
  "level": "2",
  "url": "tkchap6.html#tkRatDenom-8",
  "type": "Checkpoint",
  "number": "A.6.70",
  "title": "",
  "body": "Simplify "
},
{
  "id": "tkSimpRadEqn-3",
  "level": "2",
  "url": "tkchap6.html#tkSimpRadEqn-3",
  "type": "Example",
  "number": "A.6.71",
  "title": "",
  "body": "Solve  We square both sides of the equation to produce an equation without radicals. You can check that satisfies the original equation. "
},
{
  "id": "tkSimpRadEqn-4",
  "level": "2",
  "url": "tkchap6.html#tkSimpRadEqn-4",
  "type": "Example",
  "number": "A.6.72",
  "title": "",
  "body": "Solve  We first isolate the cube root. Next, we undo the cube root by cubing both sides of the equation. Finally, we add 4 to both sides to find the solution, . We do not have to check for extraneous solutions when we cube both sides of an equation, but it is a good idea to check the solution for accuracy anyway.  Check: We substitute for into the left side of the equation. The solutions checks. "
},
{
  "id": "tkSimpRadEqn-5",
  "level": "2",
  "url": "tkchap6.html#tkSimpRadEqn-5",
  "type": "Checkpoint",
  "number": "A.6.73",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSimpRadEqn-6",
  "level": "2",
  "url": "tkchap6.html#tkSimpRadEqn-6",
  "type": "Checkpoint",
  "number": "A.6.74",
  "title": "",
  "body": "Solve "
},
{
  "id": "tkSqRadBin-3",
  "level": "2",
  "url": "tkchap6.html#tkSqRadBin-3",
  "type": "Example",
  "number": "A.6.75",
  "title": "",
  "body": "Expand  , so we apply \"FOIL\" to get "
},
{
  "id": "tkSqRadBin-4",
  "level": "2",
  "url": "tkchap6.html#tkSqRadBin-4",
  "type": "Example",
  "number": "A.6.76",
  "title": "",
  "body": "Expand  We multiply to get "
},
{
  "id": "tkSqRadBin-5",
  "level": "2",
  "url": "tkchap6.html#tkSqRadBin-5",
  "type": "Checkpoint",
  "number": "A.6.77",
  "title": "",
  "body": "Expand "
},
{
  "id": "tkSqRadBin-6",
  "level": "2",
  "url": "tkchap6.html#tkSqRadBin-6",
  "type": "Checkpoint",
  "number": "A.6.78",
  "title": "",
  "body": "Expand "
},
{
  "id": "tkRadAbsVal-2",
  "level": "2",
  "url": "tkchap6.html#tkRadAbsVal-2",
  "type": "Example",
  "number": "A.6.79",
  "title": "",
  "body": "Explain why is not true for all values of .  Recall that the symbol means the non-negative square root of . If is a negative number, for example , then , and not , not . So if is a negative number, In fact, .  "
},
{
  "id": "tkRadAbsVal-3",
  "level": "2",
  "url": "tkchap6.html#tkRadAbsVal-3",
  "type": "Example",
  "number": "A.6.80",
  "title": "",
  "body": "For what values of is ?  when is positive or zero, that is for . If , then is negative. But the symbol returns only the positive root, so we use absolute value bars to indicate that the root is positive: "
},
{
  "id": "tkRadAbsVal-4",
  "level": "2",
  "url": "tkchap6.html#tkRadAbsVal-4",
  "type": "Checkpoint",
  "number": "A.6.81",
  "title": "",
  "body": "For what values of is ? "
},
{
  "id": "tkRadAbsVal-5",
  "level": "2",
  "url": "tkchap6.html#tkRadAbsVal-5",
  "type": "Checkpoint",
  "number": "A.6.82",
  "title": "",
  "body": "For what values of is ? "
},
{
  "id": "tkchap7",
  "level": "1",
  "url": "tkchap7.html",
  "type": "Section",
  "number": "A.7",
  "title": "Chapter 7 Exponential Functions",
  "body": "Chapter 7 Exponential Functions  Exponential Growth and Decay  Compute percent increase and decrease  To calculate an increase of %, we write the percent as a decimal and multiply the old amount by . To calculate a decrease we multiply the old amount by .  A loaf of bread cost $3.00 last month, but this year the price rose by 6%. What should you multiply by to find the new price? What is the new price?  To get the new price, we multiply by 1.06 to get The new price is $3.18.  Priceco is offering a 15% discount off the regular price of $180 for a ceiling fan. What should you multiply by to find the new price? What is the new price.  To get the new price, we multiply by , or 0.85, to get so the new price is $153.  Muriel's rent was increased by 8% from $650 per month. What should you multiply by to find her new rent? What is her new rent? , $702  A brand new SUV loses 18% of its value as soon as you drive it off the lot. If your SUV cost $35,000, what should you multiply to find its new value? What is its new value? , $28,700   Use the order of operations  Recall that evaluating powers comes before multiplication in the order of operations.  Simplify.       Compute first, then subtract the result from :  Compute first, then multiply the result by :  Compute first, then cube the result:   Evaluate for . Round your answers to hundredths.      Follow the order of operations. Compute the power first:  Follow the order of operations. Compute the power first:   Simplify. Round your answers to the nearest whole number.        Evaluate for .         Simplify expressions  Be careful to avoid tempting but false operations with exponents.  Which equation is a correct application of the laws of exponents?  or  or    The first statement is not correct. There is no law that says is equivalent to , so is not equivalent to or .  However, it is true that , so in particular the second statement is true:  The first statement is correct. If we start with , we can apply the third law, , to find .  In the second statement, 6.8 is not raised to power , so we cannot multiply 6.8 times 10.   Decide whether each simplification is a correct application of the laws of exponents. Write a correct statement if possible.  Not correct  Not correct.  Correct  Not correct, but     Exponential Functions  Evaluate exponential functions  Powers come before products in the order of operations, so to evaluate an exponential function we evaluate before multiplying by .  Evaluate .       Follow the order of operations: compute powers before products.       Evaluate . Round your answers to thousandths.       Follow the order of operations: use your calculator to compute powers before products. Do not round off at intermediate steps!       Evaluate each function. Give your answers as common fractions.  . Find  . Find  . Find       Evaluate each function. Round your answers to hundredths.  . Find  . Find  . Find        Find an unknown exponent  If we can write both sides of an equation as powers with the same base, we can equate the exponents.  Find the value of the exponent.        We can write both sides with base 3. .  We can write both sides with base 5. .  , so , and .  We can write both sides with base 4. , so   By using trial and error, estimate the value of the exponent to the nearest tenth.        , so we try a slightly smaller exponent and find that , so .  65 is between and , so must be between 3 and 4. By trying exponents 3.1, 3.2, 3.3, and so on, we find that , so .  and , so . By trying exponents between and , we find that , so .  , and as we increase the exponent on , the result will be smaller. By trial and error we find that , so .   Find the value of the exponent.        By using trial and error, estimate the value of the exponent to the nearest tenth.         Solve equations graphically  We first solve equations graphically in Section 1.2, so you might want to review that subsection.  Here is a graph of . Use the graph to solve the equation . Show your work on the graph.  parabola  To solve the equation, we want to find -values that produce a function value of 8. The vertical coordinate of each point on the graph is given by the function value, . So we look for points on the graph with vertical coordinate .  parabola with annotations  There are two such points, and . Those points tell us that and . Thus, the -coordinates of the points, namely and , are the solutions. To check algebraically, we can verify that and :   Here is a graph of . Use the graph to solve the equation . Show your work on the graph.   transformed inverse-square   We find any points on the graph with vertical coordinate . There are two points, and .) The -coordinates of those points, namely 1 and 5, are the solutions.  transformed inverse-square-annotated  Here is a graph of  cubic  Use the graph to solve the equation Show your work on the graph.  , ,  cubic  Here is a graph of   y=15 x to 2\/3  Use the graph to solve the equation Show your work on the graph.   y=15 x to 2\/3    Logarithms  Convert between radicals and powers  Because a logarithm is an exponent, it will be helpful to convert easily between radical notation and exponent notation.  Write each power as a radical.       Recall that the numerator of the exponent is the power and the denominator is the root. A negative exponent indicates a reciprocal.       Write each radical expression in exponential form and simplify.             Write each power as a radical.          Write each radical expression in exponential form and simplify.           Estimate logs  It is useful to be able to estimate mentally the value of a log.  Write each log equation in exponential form. Then use trial and error to estimate the log between two integers.        Because and , .  Because and , .  Because and , .  Because and , .    Use computing technology to complete the table for . Round the function values to tenths.                              Use your table from part (a) to make a table of values for the function .                                                                                         Write each log equation in exponential form. Then use trial and error to estimate the log, first between two integers, and then to the nearest tenth.       between 2 and 3,  between 2 and 3,  between 4 and 5,  between and 0,    Use computing technology to complete the table for .                              Use your table from part (a) to make a table of values for the function .                              Use your table from part (b) to make a graph of .  grid                                                           graph     Properties of Logarithms  Let us review some of the algebraic properties we learned earllier as they apply to exponential functions.  Apply the laws of exponents  The laws of exponents still apply to variable exponents. (If you would like to review the laws of exponents, they are listed in Section 3.2.)  Use the laws of exponents to simplify.     When multiplying two powers with the same base, we add the exponents. Notice that the base does not change.     Use the laws of exponents to simplify.     When dividing two powers with the same base, we subtract the exponents.     Use the laws of exponents to simplify.     When raising a power to a power, we multiply the exponents.     Use the laws of exponents to simplify .  Use the laws of exponents to simplify .  Use the laws of exponents to simplify .   Apply the distributive law  Which equation is a correct application of the distributive law?  or  or    The distributive law applies to multiplying a sum or difference, not a product. In the first equation, is a product, so the distributive law does not apply. (We can, however, simplfy that expression with the associative law:  The second equation is a correct application of the distributive law. You can check that the first equation is false and the second equation is true by substituting .  The distributive law applies only to multiplying a sum or product, not to other operations, such as taking logs. You can check that the first equation is false by substituting .  The second equation is a correct application of the distributive law.    Decide whether each equation is a correct application of the distributive law. Write a correct statement if possible.  Correct  Not correct  Not correct.  Not correct   Solve power and exponential equations  Compare the procedures for solving power equations and exponential equations.  Solve . Round your answer to hundredths.  This is a power equation. We divide both sides by 3 to isolate the variable, then raise both sides to the reciprocal of the exponent.   Solve . Round your answer to hundredths.  This is an exponential equation. We divide both sides by 3, then take logarithms.   Solve . Round your answer to hundredths.  This is a power equation. We divide both sides by 9 to isolate the variable, then raise both sides to the reciprocal of the exponent.   Solve . Round your answer to hundredths.  This is an exponential equation. We divide both sides by 1.5, then take logarithms.   Solve . Round your answer to hundredths.   Solve . Round your answer to hundredths.  Solve . Round your answer to hundredths.  Solve . Round your answer to hundredths.    Exponential Models  Interpret function notation  The definitions of the variables help us interpret function notation.  The number of students at Salt Creek Elementary School is growing according to the formula , where is the number of years since the school opened in 2005.  What does the equation tell us about the school?  Use function notation to say that the student population was 583 in 2007.    In this equation, and . In 2011 (six years after the school opened), the student population was 793.  In 2007, , so .   The value of Digicorp stock has been falling according to the formula , where is the number of weeks since its peak value of $48 per share.  Use function notation to say that 8 weeks later the value of a share of Digicorp stock was $34.63.  What does the equation tell us about the stock?    We evaluate the function at to get .  In this equation, and , so 12 weeks after the peak value a share of Digicorp stock was worth $29.41.   The number of internet users in the United States is given by , where in 2000. Use function notation to say that the number of internet users in 2005 was 146,679,000.   The percent of U.S. households that maintain a landline telephone is decreasing according to the formula , where in 2004. What does the equation tell us about landlines? In 2014, 63% of households maintained a landline.   Doubling time and half-life  Doubling Time and Half-Life  If is the doubling time for an exponential function , then  If is the half-life for an exponential function , then   The half-life of a cold medication in the body is 6 hours. Find its decay rate.  The decay law for the medication is We can rewrite this expression as so , and . The decay rate is 8.3%.  The growth rate of a population of badgers is 3.8% per year. Find its doubling time.  The growth law for the population is . We set and solve for . The doubling time is 18.59 years.  The doubling time for a population is 18 years. Find its annual growth rate. 3.9%  A radioactive isotope decays by 0.04% per second. What is its half-life? 4.81 hrs   Analyze graphs of exponential functions  From a graph, we can read the initial value of an exponential function and then its doubling time or half-life. From there we can calculate the growth or decay law.  The graph shows the population, , of a herd of llamas years after 2000.  How many llamas were there in 2000?  What is the doubling time for the population?  What is the annual growth rate for the population?   exponential growth   The initial value of the population is given by the -intercept of the graph, . There were 15 llamas in 2000.  Look for the time when the initial llama population doubles. When , and when , so the llama population doubles every 4 years.  The growth factor for the population is , so the annual growth rate is 18.9%.  --> Write a decay law for the graph shown below, where is in hours and is in milligrams.  exponential decay  The initial value is given by the vertical intercept of the graph, , so .  When , so the half-life of the substance is 5 hours. Thus the decay law is , or .   Write a growth law for the population whose graph is shown, where is in years.  What is the annual growth rate for the population?   exponential growth   32.0%    Write a decay law for the population whose graph is shown, where is in days.  What is the daily decay rate for the population?   exponential decay   20.6%     "
},
{
  "id": "tkPercInc-3",
  "level": "2",
  "url": "tkchap7.html#tkPercInc-3",
  "type": "Example",
  "number": "A.7.1",
  "title": "",
  "body": "A loaf of bread cost $3.00 last month, but this year the price rose by 6%. What should you multiply by to find the new price? What is the new price?  To get the new price, we multiply by 1.06 to get The new price is $3.18. "
},
{
  "id": "tkPercInc-4",
  "level": "2",
  "url": "tkchap7.html#tkPercInc-4",
  "type": "Example",
  "number": "A.7.2",
  "title": "",
  "body": "Priceco is offering a 15% discount off the regular price of $180 for a ceiling fan. What should you multiply by to find the new price? What is the new price.  To get the new price, we multiply by , or 0.85, to get so the new price is $153. "
},
{
  "id": "tkPercInc-5",
  "level": "2",
  "url": "tkchap7.html#tkPercInc-5",
  "type": "Checkpoint",
  "number": "A.7.3",
  "title": "",
  "body": "Muriel's rent was increased by 8% from $650 per month. What should you multiply by to find her new rent? What is her new rent? , $702 "
},
{
  "id": "tkPercInc-6",
  "level": "2",
  "url": "tkchap7.html#tkPercInc-6",
  "type": "Checkpoint",
  "number": "A.7.4",
  "title": "",
  "body": "A brand new SUV loses 18% of its value as soon as you drive it off the lot. If your SUV cost $35,000, what should you multiply to find its new value? What is its new value? , $28,700 "
},
{
  "id": "tkOrderOpExp-3",
  "level": "2",
  "url": "tkchap7.html#tkOrderOpExp-3",
  "type": "Example",
  "number": "A.7.5",
  "title": "",
  "body": "Simplify.       Compute first, then subtract the result from :  Compute first, then multiply the result by :  Compute first, then cube the result:  "
},
{
  "id": "tkOrderOpExp-4",
  "level": "2",
  "url": "tkchap7.html#tkOrderOpExp-4",
  "type": "Example",
  "number": "A.7.6",
  "title": "",
  "body": "Evaluate for . Round your answers to hundredths.      Follow the order of operations. Compute the power first:  Follow the order of operations. Compute the power first:  "
},
{
  "id": "tkOrderOpExp-5",
  "level": "2",
  "url": "tkchap7.html#tkOrderOpExp-5",
  "type": "Checkpoint",
  "number": "A.7.7",
  "title": "",
  "body": "Simplify. Round your answers to the nearest whole number.       "
},
{
  "id": "tkOrderOpExp-6",
  "level": "2",
  "url": "tkchap7.html#tkOrderOpExp-6",
  "type": "Checkpoint",
  "number": "A.7.8",
  "title": "",
  "body": "Evaluate for .       "
},
{
  "id": "tkSimpExp-3",
  "level": "2",
  "url": "tkchap7.html#tkSimpExp-3",
  "type": "Example",
  "number": "A.7.9",
  "title": "",
  "body": "Which equation is a correct application of the laws of exponents?  or  or    The first statement is not correct. There is no law that says is equivalent to , so is not equivalent to or .  However, it is true that , so in particular the second statement is true:  The first statement is correct. If we start with , we can apply the third law, , to find .  In the second statement, 6.8 is not raised to power , so we cannot multiply 6.8 times 10.  "
},
{
  "id": "tkSimpExp-5",
  "level": "2",
  "url": "tkchap7.html#tkSimpExp-5",
  "type": "Checkpoint",
  "number": "A.7.10",
  "title": "",
  "body": "Not correct "
},
{
  "id": "tkSimpExp-6",
  "level": "2",
  "url": "tkchap7.html#tkSimpExp-6",
  "type": "Checkpoint",
  "number": "A.7.11",
  "title": "",
  "body": "Not correct. "
},
{
  "id": "tkSimpExp-7",
  "level": "2",
  "url": "tkchap7.html#tkSimpExp-7",
  "type": "Checkpoint",
  "number": "A.7.12",
  "title": "",
  "body": "Correct "
},
{
  "id": "tkSimpExp-8",
  "level": "2",
  "url": "tkchap7.html#tkSimpExp-8",
  "type": "Checkpoint",
  "number": "A.7.13",
  "title": "",
  "body": "Not correct, but "
},
{
  "id": "tkEvalExpFncn-3",
  "level": "2",
  "url": "tkchap7.html#tkEvalExpFncn-3",
  "type": "Example",
  "number": "A.7.14",
  "title": "",
  "body": "Evaluate .       Follow the order of operations: compute powers before products.      "
},
{
  "id": "tkEvalExpFncn-4",
  "level": "2",
  "url": "tkchap7.html#tkEvalExpFncn-4",
  "type": "Example",
  "number": "A.7.15",
  "title": "",
  "body": "Evaluate . Round your answers to thousandths.       Follow the order of operations: use your calculator to compute powers before products. Do not round off at intermediate steps!      "
},
{
  "id": "tkEvalExpFncn-5",
  "level": "2",
  "url": "tkchap7.html#tkEvalExpFncn-5",
  "type": "Checkpoint",
  "number": "A.7.16",
  "title": "",
  "body": "Evaluate each function. Give your answers as common fractions.  . Find  . Find  . Find      "
},
{
  "id": "tkEvalExpFncn-6",
  "level": "2",
  "url": "tkchap7.html#tkEvalExpFncn-6",
  "type": "Checkpoint",
  "number": "A.7.17",
  "title": "",
  "body": "Evaluate each function. Round your answers to hundredths.  . Find  . Find  . Find      "
},
{
  "id": "tkFindExp-3",
  "level": "2",
  "url": "tkchap7.html#tkFindExp-3",
  "type": "Example",
  "number": "A.7.18",
  "title": "",
  "body": "Find the value of the exponent.        We can write both sides with base 3. .  We can write both sides with base 5. .  , so , and .  We can write both sides with base 4. , so  "
},
{
  "id": "tkFindExp-4",
  "level": "2",
  "url": "tkchap7.html#tkFindExp-4",
  "type": "Example",
  "number": "A.7.19",
  "title": "",
  "body": "By using trial and error, estimate the value of the exponent to the nearest tenth.        , so we try a slightly smaller exponent and find that , so .  65 is between and , so must be between 3 and 4. By trying exponents 3.1, 3.2, 3.3, and so on, we find that , so .  and , so . By trying exponents between and , we find that , so .  , and as we increase the exponent on , the result will be smaller. By trial and error we find that , so .  "
},
{
  "id": "tkFindExp-5",
  "level": "2",
  "url": "tkchap7.html#tkFindExp-5",
  "type": "Checkpoint",
  "number": "A.7.20",
  "title": "",
  "body": "Find the value of the exponent.       "
},
{
  "id": "tkFindExp-6",
  "level": "2",
  "url": "tkchap7.html#tkFindExp-6",
  "type": "Checkpoint",
  "number": "A.7.21",
  "title": "",
  "body": "By using trial and error, estimate the value of the exponent to the nearest tenth.       "
},
{
  "id": "tkSolveGraphly-3",
  "level": "2",
  "url": "tkchap7.html#tkSolveGraphly-3",
  "type": "Example",
  "number": "A.7.22",
  "title": "",
  "body": "Here is a graph of . Use the graph to solve the equation . Show your work on the graph.  parabola  To solve the equation, we want to find -values that produce a function value of 8. The vertical coordinate of each point on the graph is given by the function value, . So we look for points on the graph with vertical coordinate .  parabola with annotations  There are two such points, and . Those points tell us that and . Thus, the -coordinates of the points, namely and , are the solutions. To check algebraically, we can verify that and :  "
},
{
  "id": "tkSolveGraphly-4",
  "level": "2",
  "url": "tkchap7.html#tkSolveGraphly-4",
  "type": "Example",
  "number": "A.7.23",
  "title": "",
  "body": "Here is a graph of . Use the graph to solve the equation . Show your work on the graph.   transformed inverse-square   We find any points on the graph with vertical coordinate . There are two points, and .) The -coordinates of those points, namely 1 and 5, are the solutions.  transformed inverse-square-annotated "
},
{
  "id": "tkSolveGraphly-5",
  "level": "2",
  "url": "tkchap7.html#tkSolveGraphly-5",
  "type": "Checkpoint",
  "number": "A.7.24",
  "title": "",
  "body": "Here is a graph of  cubic  Use the graph to solve the equation Show your work on the graph.  , ,  cubic "
},
{
  "id": "tkSolveGraphly-6",
  "level": "2",
  "url": "tkchap7.html#tkSolveGraphly-6",
  "type": "Checkpoint",
  "number": "A.7.25",
  "title": "",
  "body": "Here is a graph of   y=15 x to 2\/3  Use the graph to solve the equation Show your work on the graph.   y=15 x to 2\/3 "
},
{
  "id": "tkRadtoPowr-3",
  "level": "2",
  "url": "tkchap7.html#tkRadtoPowr-3",
  "type": "Example",
  "number": "A.7.26",
  "title": "",
  "body": "Write each power as a radical.       Recall that the numerator of the exponent is the power and the denominator is the root. A negative exponent indicates a reciprocal.      "
},
{
  "id": "tkRadtoPowr-4",
  "level": "2",
  "url": "tkchap7.html#tkRadtoPowr-4",
  "type": "Example",
  "number": "A.7.27",
  "title": "",
  "body": "Write each radical expression in exponential form and simplify.            "
},
{
  "id": "tkRadtoPowr-5",
  "level": "2",
  "url": "tkchap7.html#tkRadtoPowr-5",
  "type": "Checkpoint",
  "number": "A.7.28",
  "title": "",
  "body": "Write each power as a radical.         "
},
{
  "id": "tkRadtoPowr-6",
  "level": "2",
  "url": "tkchap7.html#tkRadtoPowr-6",
  "type": "Checkpoint",
  "number": "A.7.29",
  "title": "",
  "body": "Write each radical expression in exponential form and simplify.         "
},
{
  "id": "tkEstLogs-3",
  "level": "2",
  "url": "tkchap7.html#tkEstLogs-3",
  "type": "Example",
  "number": "A.7.30",
  "title": "",
  "body": "Write each log equation in exponential form. Then use trial and error to estimate the log between two integers.        Because and , .  Because and , .  Because and , .  Because and , .  "
},
{
  "id": "tkEstLogs-4",
  "level": "2",
  "url": "tkchap7.html#tkEstLogs-4",
  "type": "Example",
  "number": "A.7.31",
  "title": "",
  "body": " Use computing technology to complete the table for . Round the function values to tenths.                              Use your table from part (a) to make a table of values for the function .                                                                                        "
},
{
  "id": "tkEstLogs-5",
  "level": "2",
  "url": "tkchap7.html#tkEstLogs-5",
  "type": "Checkpoint",
  "number": "A.7.32",
  "title": "",
  "body": "Write each log equation in exponential form. Then use trial and error to estimate the log, first between two integers, and then to the nearest tenth.       between 2 and 3,  between 2 and 3,  between 4 and 5,  between and 0,  "
},
{
  "id": "tkEstLogs-6",
  "level": "2",
  "url": "tkchap7.html#tkEstLogs-6",
  "type": "Checkpoint",
  "number": "A.7.33",
  "title": "",
  "body": " Use computing technology to complete the table for .                              Use your table from part (a) to make a table of values for the function .                              Use your table from part (b) to make a graph of .  grid                                                           graph  "
},
{
  "id": "tkMoreExpLaws-3",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-3",
  "type": "Example",
  "number": "A.7.34",
  "title": "",
  "body": "Use the laws of exponents to simplify.     When multiplying two powers with the same base, we add the exponents. Notice that the base does not change.    "
},
{
  "id": "tkMoreExpLaws-4",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-4",
  "type": "Example",
  "number": "A.7.35",
  "title": "",
  "body": "Use the laws of exponents to simplify.     When dividing two powers with the same base, we subtract the exponents.    "
},
{
  "id": "tkMoreExpLaws-5",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-5",
  "type": "Example",
  "number": "A.7.36",
  "title": "",
  "body": "Use the laws of exponents to simplify.     When raising a power to a power, we multiply the exponents.    "
},
{
  "id": "tkMoreExpLaws-6",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-6",
  "type": "Checkpoint",
  "number": "A.7.37",
  "title": "",
  "body": "Use the laws of exponents to simplify . "
},
{
  "id": "tkMoreExpLaws-7",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-7",
  "type": "Checkpoint",
  "number": "A.7.38",
  "title": "",
  "body": "Use the laws of exponents to simplify . "
},
{
  "id": "tkMoreExpLaws-8",
  "level": "2",
  "url": "tkchap7.html#tkMoreExpLaws-8",
  "type": "Checkpoint",
  "number": "A.7.39",
  "title": "",
  "body": "Use the laws of exponents to simplify . "
},
{
  "id": "tkDistLaw-2",
  "level": "2",
  "url": "tkchap7.html#tkDistLaw-2",
  "type": "Example",
  "number": "A.7.40",
  "title": "",
  "body": "Which equation is a correct application of the distributive law?  or  or    The distributive law applies to multiplying a sum or difference, not a product. In the first equation, is a product, so the distributive law does not apply. (We can, however, simplfy that expression with the associative law:  The second equation is a correct application of the distributive law. You can check that the first equation is false and the second equation is true by substituting .  The distributive law applies only to multiplying a sum or product, not to other operations, such as taking logs. You can check that the first equation is false by substituting .  The second equation is a correct application of the distributive law.   "
},
{
  "id": "tkDistLaw-4",
  "level": "2",
  "url": "tkchap7.html#tkDistLaw-4",
  "type": "Checkpoint",
  "number": "A.7.41",
  "title": "",
  "body": "Correct "
},
{
  "id": "tkDistLaw-5",
  "level": "2",
  "url": "tkchap7.html#tkDistLaw-5",
  "type": "Checkpoint",
  "number": "A.7.42",
  "title": "",
  "body": "Not correct "
},
{
  "id": "tkDistLaw-6",
  "level": "2",
  "url": "tkchap7.html#tkDistLaw-6",
  "type": "Checkpoint",
  "number": "A.7.43",
  "title": "",
  "body": "Not correct. "
},
{
  "id": "tkDistLaw-7",
  "level": "2",
  "url": "tkchap7.html#tkDistLaw-7",
  "type": "Checkpoint",
  "number": "A.7.44",
  "title": "",
  "body": "Not correct "
},
{
  "id": "tkSolveExpEqn-3",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-3",
  "type": "Example",
  "number": "A.7.45",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  This is a power equation. We divide both sides by 3 to isolate the variable, then raise both sides to the reciprocal of the exponent.  "
},
{
  "id": "tkSolveExpEqn-4",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-4",
  "type": "Example",
  "number": "A.7.46",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  This is an exponential equation. We divide both sides by 3, then take logarithms.  "
},
{
  "id": "tkSolveExpEqn-5",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-5",
  "type": "Example",
  "number": "A.7.47",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  This is a power equation. We divide both sides by 9 to isolate the variable, then raise both sides to the reciprocal of the exponent.  "
},
{
  "id": "tkSolveExpEqn-6",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-6",
  "type": "Example",
  "number": "A.7.48",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  This is an exponential equation. We divide both sides by 1.5, then take logarithms.  "
},
{
  "id": "tkSolveExpEqn-7",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-7",
  "type": "Checkpoint",
  "number": "A.7.49",
  "title": "",
  "body": "Solve . Round your answer to hundredths.  "
},
{
  "id": "tkSolveExpEqn-8",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-8",
  "type": "Checkpoint",
  "number": "A.7.50",
  "title": "",
  "body": "Solve . Round your answer to hundredths. "
},
{
  "id": "tkSolveExpEqn-9",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-9",
  "type": "Checkpoint",
  "number": "A.7.51",
  "title": "",
  "body": "Solve . Round your answer to hundredths. "
},
{
  "id": "tkSolveExpEqn-10",
  "level": "2",
  "url": "tkchap7.html#tkSolveExpEqn-10",
  "type": "Checkpoint",
  "number": "A.7.52",
  "title": "",
  "body": "Solve . Round your answer to hundredths. "
},
{
  "id": "tkIntFncnNot-3",
  "level": "2",
  "url": "tkchap7.html#tkIntFncnNot-3",
  "type": "Example",
  "number": "A.7.53",
  "title": "",
  "body": "The number of students at Salt Creek Elementary School is growing according to the formula , where is the number of years since the school opened in 2005.  What does the equation tell us about the school?  Use function notation to say that the student population was 583 in 2007.    In this equation, and . In 2011 (six years after the school opened), the student population was 793.  In 2007, , so .  "
},
{
  "id": "tkIntFncnNot-4",
  "level": "2",
  "url": "tkchap7.html#tkIntFncnNot-4",
  "type": "Example",
  "number": "A.7.54",
  "title": "",
  "body": "The value of Digicorp stock has been falling according to the formula , where is the number of weeks since its peak value of $48 per share.  Use function notation to say that 8 weeks later the value of a share of Digicorp stock was $34.63.  What does the equation tell us about the stock?    We evaluate the function at to get .  In this equation, and , so 12 weeks after the peak value a share of Digicorp stock was worth $29.41.  "
},
{
  "id": "tkIntFncnNot-5",
  "level": "2",
  "url": "tkchap7.html#tkIntFncnNot-5",
  "type": "Checkpoint",
  "number": "A.7.55",
  "title": "",
  "body": "The number of internet users in the United States is given by , where in 2000. Use function notation to say that the number of internet users in 2005 was 146,679,000.  "
},
{
  "id": "tkIntFncnNot-6",
  "level": "2",
  "url": "tkchap7.html#tkIntFncnNot-6",
  "type": "Checkpoint",
  "number": "A.7.56",
  "title": "",
  "body": "The percent of U.S. households that maintain a landline telephone is decreasing according to the formula , where in 2004. What does the equation tell us about landlines? In 2014, 63% of households maintained a landline. "
},
{
  "id": "tkDblHalf-3",
  "level": "2",
  "url": "tkchap7.html#tkDblHalf-3",
  "type": "Example",
  "number": "A.7.57",
  "title": "",
  "body": "The half-life of a cold medication in the body is 6 hours. Find its decay rate.  The decay law for the medication is We can rewrite this expression as so , and . The decay rate is 8.3%. "
},
{
  "id": "tkDblHalf-4",
  "level": "2",
  "url": "tkchap7.html#tkDblHalf-4",
  "type": "Example",
  "number": "A.7.58",
  "title": "",
  "body": "The growth rate of a population of badgers is 3.8% per year. Find its doubling time.  The growth law for the population is . We set and solve for . The doubling time is 18.59 years. "
},
{
  "id": "tkDblHalf-5",
  "level": "2",
  "url": "tkchap7.html#tkDblHalf-5",
  "type": "Checkpoint",
  "number": "A.7.59",
  "title": "",
  "body": "The doubling time for a population is 18 years. Find its annual growth rate. 3.9% "
},
{
  "id": "tkDblHalf-6",
  "level": "2",
  "url": "tkchap7.html#tkDblHalf-6",
  "type": "Checkpoint",
  "number": "A.7.60",
  "title": "",
  "body": "A radioactive isotope decays by 0.04% per second. What is its half-life? 4.81 hrs "
},
{
  "id": "tkAnalyzeExpGraph-3",
  "level": "2",
  "url": "tkchap7.html#tkAnalyzeExpGraph-3",
  "type": "Example",
  "number": "A.7.61",
  "title": "",
  "body": "The graph shows the population, , of a herd of llamas years after 2000.  How many llamas were there in 2000?  What is the doubling time for the population?  What is the annual growth rate for the population?   exponential growth   The initial value of the population is given by the -intercept of the graph, . There were 15 llamas in 2000.  Look for the time when the initial llama population doubles. When , and when , so the llama population doubles every 4 years.  The growth factor for the population is , so the annual growth rate is 18.9%.  "
},
{
  "id": "tkAnalyzeExpGraph-4",
  "level": "2",
  "url": "tkchap7.html#tkAnalyzeExpGraph-4",
  "type": "Example",
  "number": "A.7.62",
  "title": "",
  "body": "Write a decay law for the graph shown below, where is in hours and is in milligrams.  exponential decay  The initial value is given by the vertical intercept of the graph, , so .  When , so the half-life of the substance is 5 hours. Thus the decay law is , or . "
},
{
  "id": "tkAnalyzeExpGraph-5",
  "level": "2",
  "url": "tkchap7.html#tkAnalyzeExpGraph-5",
  "type": "Checkpoint",
  "number": "A.7.63",
  "title": "",
  "body": " Write a growth law for the population whose graph is shown, where is in years.  What is the annual growth rate for the population?   exponential growth   32.0%  "
},
{
  "id": "tkAnalyzeExpGraph-6",
  "level": "2",
  "url": "tkchap7.html#tkAnalyzeExpGraph-6",
  "type": "Checkpoint",
  "number": "A.7.64",
  "title": "",
  "body": " Write a decay law for the population whose graph is shown, where is in days.  What is the daily decay rate for the population?   exponential decay   20.6%  "
},
{
  "id": "tkchap8",
  "level": "1",
  "url": "tkchap8.html",
  "type": "Section",
  "number": "A.8",
  "title": "Chapter 8 Polynomial and Rational Functions",
  "body": "Chapter 8 Polynomial and Rational Functions  Polynomial Functions  Compute sums and products  Compare the rules for simplilfying products to the rules for simplifying sums.  Simplify each expression if possible.      This expression is a difference of terms, but they are not like terms (because the variable has different exponents), so we cannot combine them.  This expression is a product, and the powers have the same base, so we can apply the first law of exponents to get .   Simplify each expression if possible.      This expression is a difference of like terms, so we can combine their coefficients to get  This expression is a product, and the powers have the same base, so we can apply the first law of exponents to get   Simplify each expression if possible.       Simplify each expression if possible.         Use formulas  There are several useful formulas for simplifying polynomials.  If find and .  We substitute for to find   If and , find and .  We substitute for and for to find   If and , find and .  If and , find and .   Square binomials  Sometimes it is easier to use formulas to square binomials.  Special Products of Binomials   Use the identity to expand .  We substitute for and for into the identity.   Use the identity to expand .  We substitute for and for into the identity.   Expand  Expand   Use formulas  There are several useful formulas for simplifying polynomials.  If find and .  We substitute for to find   If and , find and .  We substitute for and for to find   If and , find and .  If and , find and .    Algebraic Fractions  Factor a polynomial  To reduce an algebraic fraction, we must factor its numerator and denominator.  Factor.       We factor out a common factor of to get .  This is a difference of two squares that factors as .  This is the square of a binomial, .   Factor.       We first factor out 3 to find , then factor the difference of two squares to get .  This is a differece of two cubes, which factors as .  We first factor out to get , then factor the difference of two squares to get .   Factor completely  Factor completely  Factor completely  Factor completely   Find the opposite of a binomial  To find the opposite or negative of a binomial we multiply by .  Which of these is the opposite of ?      The opposite of is , or .  Which of these pairs of binomials are opposites?  and  and  and   The opposite of is , or , so (c) is correct.  Find the opposite of the binomial  Find the opposite of the binomial  Find the opposite of the binomial  Find the opposite of the binomial   Asymptotes  The asymptotes of rational functions are horizontal and vertical lines.  Give the equation and slope of the line.  vertical line  This line is a vertical line. All the points on the line have -coordinate , so the equation of the line is . Because between any two points on the line, its slope is undefined.  Give the equation and slope of the line.  horizontal line  This line is a horizontal line. All the points on the line have -coordinate , so the equation of the line is . Because between any two points on the line, its slope is .  Give the equation and slope of the line.  horizontal line  Give the equation and slope of the line.  vertical line ; is undefined  Give the equation and slope of the line.  horizontal line  Give the equation and slope of the line.  vertical line ; is undefined    Operations on Algebraic Fractions  Find an LCD  The first step in adding unlike fractions is to find the lowest common denominator, or LCD.  Find the LCD for the fractions  We factor each denominator and line up any common factors vertically. We use one factor from each column in the LCD. The LCD is , or 30.  Find the LCD for the fractions  We factor each denominator and line up any common factors vertically. We use one factor from each column in the LCD. The LCd is , or .  Find the LCD for the fractions.        Find the LCD for the fractions.         Build fractions  Before we can add unlike fractions, we must build each fraction to an equivalent one with the LCD as denominator.  Write an equivalent fraction with the new denominator:  We first find the building factor for the fraction: what must we mulitply the old denominator by to get the new denominator? We factor the new denominator to see what factors are missing.  The new denominator is , so we need to multiply the old denominator by . This is the building factor. We multiply top and bottom of the old fraction by the building factor:   Write an equivalent fraction with the new denominator:  The new denominator factors as , so the building factor is . We multiply top and bottom of the old fraction by to obtain:   Write an equivalent fraction with the new denominator.        Write an equivalent fraction with the new denominator.        Multiply and divide fractions  Multiply  We factor each numerator and denominator, and look for common factors.   Divide  We multiply the first fraction by the reciprocal of the second fraction.   Multiply  Multiply  Divide  Divide    More Operations on Fractions  Use negative exponents  Recall that a negative exponent indicates a reciprocal.  Write each expression without negative exponents.       We use the fact that , and consequently that .       Simplify where possible using the laws of exponents.        Add the exponents:  Subtract the exponents:  Raise each factor to the power . Multiply exponents:  We cannot add or subtract powers with different exponents.   Simplify where possible. Write your answer without negative exponents.  Simplify where possible. Write your answer without negative exponents.  Simplify where possible. Write your answer without negative exponents.  Simplify where possible. Write your answer without negative exponents.   Improper fractions  An improper fraction is one in which the numerator is larger than the denominator.  Write an improper fraction for the sum  We write the whole number with the same denominator as the fraction. Thus,   Write an improper fraction for the difference  We write the whole number with the same denominator as the fraction. Thus,   Write an improper fraction for each sum or difference.        Write an improper fraction for each sum or difference.         Check a division  Remember that division is the inverse operation for multiplication.  Check that the division is correct:  The quotient tells us that 15 divides into 536 thirty-five times, with a remainder of 11. This in turn means that if we multiply 15 by 35, and then add 11, we should get 536 back again. Note the pattern: divisor quotient remainder starting number   Check that the division is correct:  The answer tells us that divides into to give a quotient of , with a remainder of 4. If we multiply by , and then add 4, we should get back again.   Check the division.  Check the division.  Check the division.  Check the division.    Equations with Fractions  Solve quadratic equations  Once we have cleared the fractions from an equation, we may have a quadratic equation to solve. We can choose the easiest method to solve: factoring, extracting roots, or the quadratic formula.  Solve each quadratic equation by the easiest method.      Because does not factor, we use the quadratic formula.  We use extraction of roots.  We write the equation in standard form and factor the left side.   Solve each equation by the easiest method.             Solve equations graphically  If we can't solve an equation algebraically, we may be able use a graph to find at least an approximation for the solution.  Use a graph to solve the equation   We graph the equation and look for the points where (the -intercepts).  cubic  From the graph, we estimate the solutions at and . By substituting each of these values into the original equation, you can verify that they are indeed solutions.   Use a graph to solve the equation  We graph the equations and and look for points on the two graphs where the coordinates are equal (intersubsection points).  parabola and line  From the graph, we see that the points with and have the same -coordinate on both graphs. In other words, when or , so and are the solutions.   Use a graph to solve the equation  Use a graph to solve the equation   Choose the correct technique  Choose the appropriate technique for each problem.  Cross-multiply  Multiply each term by the LCD  Multiply top and bottom by the LCD  Find building factors    Combine  Solve  Solve  Simplify    To add fractions, we find an LCD and build each fraction, so choice IV is correct.  To solve a proportion, we can cross-multiply, so choice I is correct.  To clear fractions from an equation, we multiply by the LCD, so choice II is correct.  To simplify a complex fraction, we apply the fundamental pricnicple of fractions, so choice III is correct.   Write the first step for the problem.  Solve  Write the first step for the problem.  Combine  Write the first step for the problem.  Simplify  Write the first step for the problem.  Solve    "
},
{
  "id": "tkSumandProd-3",
  "level": "2",
  "url": "tkchap8.html#tkSumandProd-3",
  "type": "Example",
  "number": "A.8.1",
  "title": "",
  "body": "Simplify each expression if possible.      This expression is a difference of terms, but they are not like terms (because the variable has different exponents), so we cannot combine them.  This expression is a product, and the powers have the same base, so we can apply the first law of exponents to get .  "
},
{
  "id": "tkSumandProd-4",
  "level": "2",
  "url": "tkchap8.html#tkSumandProd-4",
  "type": "Example",
  "number": "A.8.2",
  "title": "",
  "body": "Simplify each expression if possible.      This expression is a difference of like terms, so we can combine their coefficients to get  This expression is a product, and the powers have the same base, so we can apply the first law of exponents to get  "
},
{
  "id": "tkSumandProd-5",
  "level": "2",
  "url": "tkchap8.html#tkSumandProd-5",
  "type": "Checkpoint",
  "number": "A.8.3",
  "title": "",
  "body": "Simplify each expression if possible.      "
},
{
  "id": "tkSumandProd-6",
  "level": "2",
  "url": "tkchap8.html#tkSumandProd-6",
  "type": "Checkpoint",
  "number": "A.8.4",
  "title": "",
  "body": "Simplify each expression if possible.       "
},
{
  "id": "tkUseForm-3",
  "level": "2",
  "url": "tkchap8.html#tkUseForm-3",
  "type": "Example",
  "number": "A.8.5",
  "title": "",
  "body": "If find and .  We substitute for to find  "
},
{
  "id": "tkUseForm-4",
  "level": "2",
  "url": "tkchap8.html#tkUseForm-4",
  "type": "Example",
  "number": "A.8.6",
  "title": "",
  "body": "If and , find and .  We substitute for and for to find  "
},
{
  "id": "tkUseForm-5",
  "level": "2",
  "url": "tkchap8.html#tkUseForm-5",
  "type": "Checkpoint",
  "number": "A.8.7",
  "title": "",
  "body": "If and , find and . "
},
{
  "id": "tkUseForm-6",
  "level": "2",
  "url": "tkchap8.html#tkUseForm-6",
  "type": "Checkpoint",
  "number": "A.8.8",
  "title": "",
  "body": "If and , find and . "
},
{
  "id": "tkSqBin-4",
  "level": "2",
  "url": "tkchap8.html#tkSqBin-4",
  "type": "Example",
  "number": "A.8.9",
  "title": "",
  "body": "Use the identity to expand .  We substitute for and for into the identity.  "
},
{
  "id": "tkSqBin-5",
  "level": "2",
  "url": "tkchap8.html#tkSqBin-5",
  "type": "Example",
  "number": "A.8.10",
  "title": "",
  "body": "Use the identity to expand .  We substitute for and for into the identity.  "
},
{
  "id": "tkSqBin-6",
  "level": "2",
  "url": "tkchap8.html#tkSqBin-6",
  "type": "Checkpoint",
  "number": "A.8.11",
  "title": "",
  "body": "Expand "
},
{
  "id": "tkSqBin-7",
  "level": "2",
  "url": "tkchap8.html#tkSqBin-7",
  "type": "Checkpoint",
  "number": "A.8.12",
  "title": "",
  "body": "Expand "
},
{
  "id": "tkUseFormula-3",
  "level": "2",
  "url": "tkchap8.html#tkUseFormula-3",
  "type": "Example",
  "number": "A.8.13",
  "title": "",
  "body": "If find and .  We substitute for to find  "
},
{
  "id": "tkUseFormula-4",
  "level": "2",
  "url": "tkchap8.html#tkUseFormula-4",
  "type": "Example",
  "number": "A.8.14",
  "title": "",
  "body": "If and , find and .  We substitute for and for to find  "
},
{
  "id": "tkUseFormula-5",
  "level": "2",
  "url": "tkchap8.html#tkUseFormula-5",
  "type": "Checkpoint",
  "number": "A.8.15",
  "title": "",
  "body": "If and , find and . "
},
{
  "id": "tkUseFormula-6",
  "level": "2",
  "url": "tkchap8.html#tkUseFormula-6",
  "type": "Checkpoint",
  "number": "A.8.16",
  "title": "",
  "body": "If and , find and . "
},
{
  "id": "tkFactPoly-3",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-3",
  "type": "Example",
  "number": "A.8.17",
  "title": "",
  "body": "Factor.       We factor out a common factor of to get .  This is a difference of two squares that factors as .  This is the square of a binomial, .  "
},
{
  "id": "tkFactPoly-4",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-4",
  "type": "Example",
  "number": "A.8.18",
  "title": "",
  "body": "Factor.       We first factor out 3 to find , then factor the difference of two squares to get .  This is a differece of two cubes, which factors as .  We first factor out to get , then factor the difference of two squares to get .  "
},
{
  "id": "tkFactPoly-5",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-5",
  "type": "Checkpoint",
  "number": "A.8.19",
  "title": "",
  "body": "Factor completely "
},
{
  "id": "tkFactPoly-6",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-6",
  "type": "Checkpoint",
  "number": "A.8.20",
  "title": "",
  "body": "Factor completely "
},
{
  "id": "tkFactPoly-7",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-7",
  "type": "Checkpoint",
  "number": "A.8.21",
  "title": "",
  "body": "Factor completely "
},
{
  "id": "tkFactPoly-8",
  "level": "2",
  "url": "tkchap8.html#tkFactPoly-8",
  "type": "Checkpoint",
  "number": "A.8.22",
  "title": "",
  "body": "Factor completely "
},
{
  "id": "tkOppBin-3",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-3",
  "type": "Example",
  "number": "A.8.23",
  "title": "",
  "body": "Which of these is the opposite of ?      The opposite of is , or . "
},
{
  "id": "tkOppBin-4",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-4",
  "type": "Example",
  "number": "A.8.24",
  "title": "",
  "body": "Which of these pairs of binomials are opposites?  and  and  and   The opposite of is , or , so (c) is correct. "
},
{
  "id": "tkOppBin-5",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-5",
  "type": "Checkpoint",
  "number": "A.8.25",
  "title": "",
  "body": "Find the opposite of the binomial "
},
{
  "id": "tkOppBin-6",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-6",
  "type": "Checkpoint",
  "number": "A.8.26",
  "title": "",
  "body": "Find the opposite of the binomial "
},
{
  "id": "tkOppBin-7",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-7",
  "type": "Checkpoint",
  "number": "A.8.27",
  "title": "",
  "body": "Find the opposite of the binomial "
},
{
  "id": "tkOppBin-8",
  "level": "2",
  "url": "tkchap8.html#tkOppBin-8",
  "type": "Checkpoint",
  "number": "A.8.28",
  "title": "",
  "body": "Find the opposite of the binomial "
},
{
  "id": "tkAsymp-3",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-3",
  "type": "Example",
  "number": "A.8.29",
  "title": "",
  "body": "Give the equation and slope of the line.  vertical line  This line is a vertical line. All the points on the line have -coordinate , so the equation of the line is . Because between any two points on the line, its slope is undefined. "
},
{
  "id": "tkAsymp-4",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-4",
  "type": "Example",
  "number": "A.8.30",
  "title": "",
  "body": "Give the equation and slope of the line.  horizontal line  This line is a horizontal line. All the points on the line have -coordinate , so the equation of the line is . Because between any two points on the line, its slope is . "
},
{
  "id": "tkAsymp-5",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-5",
  "type": "Checkpoint",
  "number": "A.8.31",
  "title": "",
  "body": "Give the equation and slope of the line.  horizontal line "
},
{
  "id": "tkAsymp-6",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-6",
  "type": "Checkpoint",
  "number": "A.8.32",
  "title": "",
  "body": "Give the equation and slope of the line.  vertical line ; is undefined "
},
{
  "id": "tkAsymp-7",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-7",
  "type": "Checkpoint",
  "number": "A.8.33",
  "title": "",
  "body": "Give the equation and slope of the line.  horizontal line "
},
{
  "id": "tkAsymp-8",
  "level": "2",
  "url": "tkchap8.html#tkAsymp-8",
  "type": "Checkpoint",
  "number": "A.8.34",
  "title": "",
  "body": "Give the equation and slope of the line.  vertical line ; is undefined "
},
{
  "id": "tkLCD-3",
  "level": "2",
  "url": "tkchap8.html#tkLCD-3",
  "type": "Example",
  "number": "A.8.35",
  "title": "",
  "body": "Find the LCD for the fractions  We factor each denominator and line up any common factors vertically. We use one factor from each column in the LCD. The LCD is , or 30. "
},
{
  "id": "tkLCD-4",
  "level": "2",
  "url": "tkchap8.html#tkLCD-4",
  "type": "Example",
  "number": "A.8.36",
  "title": "",
  "body": "Find the LCD for the fractions  We factor each denominator and line up any common factors vertically. We use one factor from each column in the LCD. The LCd is , or . "
},
{
  "id": "tkLCD-5",
  "level": "2",
  "url": "tkchap8.html#tkLCD-5",
  "type": "Checkpoint",
  "number": "A.8.37",
  "title": "",
  "body": "Find the LCD for the fractions.       "
},
{
  "id": "tkLCD-6",
  "level": "2",
  "url": "tkchap8.html#tkLCD-6",
  "type": "Checkpoint",
  "number": "A.8.38",
  "title": "",
  "body": "Find the LCD for the fractions.       "
},
{
  "id": "tkBuild-3",
  "level": "2",
  "url": "tkchap8.html#tkBuild-3",
  "type": "Example",
  "number": "A.8.39",
  "title": "",
  "body": "Write an equivalent fraction with the new denominator:  We first find the building factor for the fraction: what must we mulitply the old denominator by to get the new denominator? We factor the new denominator to see what factors are missing.  The new denominator is , so we need to multiply the old denominator by . This is the building factor. We multiply top and bottom of the old fraction by the building factor:  "
},
{
  "id": "tkBuild-4",
  "level": "2",
  "url": "tkchap8.html#tkBuild-4",
  "type": "Example",
  "number": "A.8.40",
  "title": "",
  "body": "Write an equivalent fraction with the new denominator:  The new denominator factors as , so the building factor is . We multiply top and bottom of the old fraction by to obtain:  "
},
{
  "id": "tkBuild-5",
  "level": "2",
  "url": "tkchap8.html#tkBuild-5",
  "type": "Checkpoint",
  "number": "A.8.41",
  "title": "",
  "body": "Write an equivalent fraction with the new denominator.       "
},
{
  "id": "tkBuild-6",
  "level": "2",
  "url": "tkchap8.html#tkBuild-6",
  "type": "Checkpoint",
  "number": "A.8.42",
  "title": "",
  "body": "Write an equivalent fraction with the new denominator.      "
},
{
  "id": "tkMultDiv-2",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-2",
  "type": "Example",
  "number": "A.8.43",
  "title": "",
  "body": "Multiply  We factor each numerator and denominator, and look for common factors.  "
},
{
  "id": "tkMultDiv-3",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-3",
  "type": "Example",
  "number": "A.8.44",
  "title": "",
  "body": "Divide  We multiply the first fraction by the reciprocal of the second fraction.  "
},
{
  "id": "tkMultDiv-4",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-4",
  "type": "Checkpoint",
  "number": "A.8.45",
  "title": "",
  "body": "Multiply "
},
{
  "id": "tkMultDiv-5",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-5",
  "type": "Checkpoint",
  "number": "A.8.46",
  "title": "",
  "body": "Multiply "
},
{
  "id": "tkMultDiv-6",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-6",
  "type": "Checkpoint",
  "number": "A.8.47",
  "title": "",
  "body": "Divide "
},
{
  "id": "tkMultDiv-7",
  "level": "2",
  "url": "tkchap8.html#tkMultDiv-7",
  "type": "Checkpoint",
  "number": "A.8.48",
  "title": "",
  "body": "Divide "
},
{
  "id": "tkUseNegExp-3",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-3",
  "type": "Example",
  "number": "A.8.49",
  "title": "",
  "body": "Write each expression without negative exponents.       We use the fact that , and consequently that .      "
},
{
  "id": "tkUseNegExp-4",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-4",
  "type": "Example",
  "number": "A.8.50",
  "title": "",
  "body": "Simplify where possible using the laws of exponents.        Add the exponents:  Subtract the exponents:  Raise each factor to the power . Multiply exponents:  We cannot add or subtract powers with different exponents.  "
},
{
  "id": "tkUseNegExp-5",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-5",
  "type": "Checkpoint",
  "number": "A.8.51",
  "title": "",
  "body": "Simplify where possible. Write your answer without negative exponents. "
},
{
  "id": "tkUseNegExp-6",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-6",
  "type": "Checkpoint",
  "number": "A.8.52",
  "title": "",
  "body": "Simplify where possible. Write your answer without negative exponents. "
},
{
  "id": "tkUseNegExp-7",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-7",
  "type": "Checkpoint",
  "number": "A.8.53",
  "title": "",
  "body": "Simplify where possible. Write your answer without negative exponents. "
},
{
  "id": "tkUseNegExp-8",
  "level": "2",
  "url": "tkchap8.html#tkUseNegExp-8",
  "type": "Checkpoint",
  "number": "A.8.54",
  "title": "",
  "body": "Simplify where possible. Write your answer without negative exponents. "
},
{
  "id": "tkImpFrac-3",
  "level": "2",
  "url": "tkchap8.html#tkImpFrac-3",
  "type": "Example",
  "number": "A.8.55",
  "title": "",
  "body": "Write an improper fraction for the sum  We write the whole number with the same denominator as the fraction. Thus,  "
},
{
  "id": "tkImpFrac-4",
  "level": "2",
  "url": "tkchap8.html#tkImpFrac-4",
  "type": "Example",
  "number": "A.8.56",
  "title": "",
  "body": "Write an improper fraction for the difference  We write the whole number with the same denominator as the fraction. Thus,  "
},
{
  "id": "tkImpFrac-5",
  "level": "2",
  "url": "tkchap8.html#tkImpFrac-5",
  "type": "Checkpoint",
  "number": "A.8.57",
  "title": "",
  "body": "Write an improper fraction for each sum or difference.       "
},
{
  "id": "tkImpFrac-6",
  "level": "2",
  "url": "tkchap8.html#tkImpFrac-6",
  "type": "Checkpoint",
  "number": "A.8.58",
  "title": "",
  "body": "Write an improper fraction for each sum or difference.       "
},
{
  "id": "tkCheckDiv-3",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-3",
  "type": "Example",
  "number": "A.8.59",
  "title": "",
  "body": "Check that the division is correct:  The quotient tells us that 15 divides into 536 thirty-five times, with a remainder of 11. This in turn means that if we multiply 15 by 35, and then add 11, we should get 536 back again. Note the pattern: divisor quotient remainder starting number  "
},
{
  "id": "tkCheckDiv-4",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-4",
  "type": "Example",
  "number": "A.8.60",
  "title": "",
  "body": "Check that the division is correct:  The answer tells us that divides into to give a quotient of , with a remainder of 4. If we multiply by , and then add 4, we should get back again.  "
},
{
  "id": "tkCheckDiv-5",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-5",
  "type": "Checkpoint",
  "number": "A.8.61",
  "title": "",
  "body": "Check the division. "
},
{
  "id": "tkCheckDiv-6",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-6",
  "type": "Checkpoint",
  "number": "A.8.62",
  "title": "",
  "body": "Check the division. "
},
{
  "id": "tkCheckDiv-7",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-7",
  "type": "Checkpoint",
  "number": "A.8.63",
  "title": "",
  "body": "Check the division. "
},
{
  "id": "tkCheckDiv-8",
  "level": "2",
  "url": "tkchap8.html#tkCheckDiv-8",
  "type": "Checkpoint",
  "number": "A.8.64",
  "title": "",
  "body": "Check the division. "
},
{
  "id": "tkSolveQuadEqn-3",
  "level": "2",
  "url": "tkchap8.html#tkSolveQuadEqn-3",
  "type": "Example",
  "number": "A.8.65",
  "title": "",
  "body": "Solve each quadratic equation by the easiest method.      Because does not factor, we use the quadratic formula.  We use extraction of roots.  We write the equation in standard form and factor the left side.  "
},
{
  "id": "tkSolveQuadEqn-4",
  "level": "2",
  "url": "tkchap8.html#tkSolveQuadEqn-4",
  "type": "Checkpoint",
  "number": "A.8.66",
  "title": "",
  "body": "Solve each equation by the easiest method.           "
},
{
  "id": "tkFracEqnGraphly-3",
  "level": "2",
  "url": "tkchap8.html#tkFracEqnGraphly-3",
  "type": "Example",
  "number": "A.8.67",
  "title": "",
  "body": "Use a graph to solve the equation   We graph the equation and look for the points where (the -intercepts).  cubic  From the graph, we estimate the solutions at and . By substituting each of these values into the original equation, you can verify that they are indeed solutions.  "
},
{
  "id": "tkFracEqnGraphly-4",
  "level": "2",
  "url": "tkchap8.html#tkFracEqnGraphly-4",
  "type": "Example",
  "number": "A.8.68",
  "title": "",
  "body": "Use a graph to solve the equation  We graph the equations and and look for points on the two graphs where the coordinates are equal (intersubsection points).  parabola and line  From the graph, we see that the points with and have the same -coordinate on both graphs. In other words, when or , so and are the solutions.  "
},
{
  "id": "tkFracEqnGraphly-5",
  "level": "2",
  "url": "tkchap8.html#tkFracEqnGraphly-5",
  "type": "Checkpoint",
  "number": "A.8.69",
  "title": "",
  "body": "Use a graph to solve the equation "
},
{
  "id": "tkFracEqnGraphly-6",
  "level": "2",
  "url": "tkchap8.html#tkFracEqnGraphly-6",
  "type": "Checkpoint",
  "number": "A.8.70",
  "title": "",
  "body": "Use a graph to solve the equation "
},
{
  "id": "tkChooseTech-2",
  "level": "2",
  "url": "tkchap8.html#tkChooseTech-2",
  "type": "Example",
  "number": "A.8.71",
  "title": "",
  "body": "Choose the appropriate technique for each problem.  Cross-multiply  Multiply each term by the LCD  Multiply top and bottom by the LCD  Find building factors    Combine  Solve  Solve  Simplify    To add fractions, we find an LCD and build each fraction, so choice IV is correct.  To solve a proportion, we can cross-multiply, so choice I is correct.  To clear fractions from an equation, we multiply by the LCD, so choice II is correct.  To simplify a complex fraction, we apply the fundamental pricnicple of fractions, so choice III is correct.  "
},
{
  "id": "tkChooseTech-3",
  "level": "2",
  "url": "tkchap8.html#tkChooseTech-3",
  "type": "Checkpoint",
  "number": "A.8.72",
  "title": "",
  "body": "Write the first step for the problem.  Solve "
},
{
  "id": "tkChooseTech-4",
  "level": "2",
  "url": "tkchap8.html#tkChooseTech-4",
  "type": "Checkpoint",
  "number": "A.8.73",
  "title": "",
  "body": "Write the first step for the problem.  Combine "
},
{
  "id": "tkChooseTech-5",
  "level": "2",
  "url": "tkchap8.html#tkChooseTech-5",
  "type": "Checkpoint",
  "number": "A.8.74",
  "title": "",
  "body": "Write the first step for the problem.  Simplify "
},
{
  "id": "tkChooseTech-6",
  "level": "2",
  "url": "tkchap8.html#tkChooseTech-6",
  "type": "Checkpoint",
  "number": "A.8.75",
  "title": "",
  "body": "Write the first step for the problem.  Solve "
},
{
  "id": "tkchap9",
  "level": "1",
  "url": "tkchap9.html",
  "type": "Section",
  "number": "A.9",
  "title": "Chapter 9 Equations and Graphs",
  "body": "Chapter 9 Equations and Graphs  Properties of Lines  Find the slope of a line  We can tell whether two lines are parallel, perpendicular, or neither by comparing their slopes.  Find the slope of the line  The easiest way to find the slope of this line is to put its equation into slope-intercept form by solving for . The slope of the line is .  Find the slope of the line whose intercepts are and .  We use the slope formula.   Find the slope of the line  Find the slope of the line undefined  Find the slope of the line that passes through and .  Find the slope of a line that describes a 35% grade (or incline).   Use the point-slope formula  Recall the point-slope formula for finding the equation of a line:  Find the -intercept of the line of slope that passes through .  We first use the point-slope formula to find the equation of the line. The -intercept of the line is .  Find the equation of the line with -intercept that passes through .   We first compute the slope, using the two points given. Now we can use the point-slope formula.   Find the equation of the line that has slope and passes through .  Find the equation of the line that has slope and passes through .  Find the -intercept of the line that passes through and has slope .  Find the -intercept of the line that has slope and passes through .   Use properties of geometric figures.  Analytic geometry uses algebra to help solve geometric problems.  The figure shows isosceles triangle and its altitude . (Recall that the altitude of a triangle is the segment perpendicular to the base that passes through the opposite vertex.) For this problem, we'll use the following property:  In an isoceles triangle, the altitude bisects the base.  isosceles triangle   Find the equation of the line that includes .  Find the coordinates of point .  Find the length of the segment .    Because is perpendicular to , we can find its slope. The coordinates of and are and , so the slope of is The slope of is the negative reciprocal of , or .  Now we can use the point-slope formula with and the coordinates of to calculate the equation of the line.  Because the altitude bisects the base, point is the midpoint of . The coordinates of and are and , so we use the midpoint formula to find the coordinates of . The coordinates of are .  The coordinates of are , and the coordinates of are . We use the distance formula to find the length of .   The line is tangent at point to a circle with center . For this problem, use the following property:  The tangent to a circle is perpendicular to the radius through the point of tangency.  circle and tangent line   Find the equation of the line through and .  Find the coordinates of .  Find the radius of the circle, .  Find the equation of the circle.      In the right triangle shown, is parallel to the shorter leg, and . For this problem, use the following property:  A line parallel to the base of a triangle cuts off a similar triangle. (Recall that the sides of similar triangles are proportional.)  triangle cut parallel to base   Write an expression for in terms of .  Find an expression for in terms of .  If find an expression for in terms of .        The quadrilateral has vertices and  triangle cut parallel to base   Show that is a parallelogram (its opposite sides are parallel).  Find equations for the lines through the diagonals, and .  Find the intersubsection of the diagonals, .  Find the lengths of and , and the lengths of and .  This example illustrates the following property of parallelograms:  The diagonals of a parallelogram each other.       bisect     The Distance and Midpoint Formulas  Use radicals  Because the distance formula is derived from the Pythagorean theorem, using it involves working with radicals.   In the right triangle shown, and .  Is ? Why or why not?  Find the length of .  right triangle   No, the length of is shorter than the lengths of and combined, so .  We use the Pythagorean theorem: The hypotenuse is 10 cm long.   Is ?  No. In the previous example, , and we saw that . We cannot simplify by taking the square root of each term.  If , write and simplify expressions for:     . Or, .  . Or, .   Simplify if possible: cannot be simplified  Simplify if possible:  Simplify if possible:   Use the equation for a circle  The equation for a circle of radius centered at is  Does lie on the circle ?  We substitute into the equation for the circle. The point satisfies the equation, so it does lie on the circle.  Find a point with -coordinate that lies on the circle . and   Complete the square  To find the center and radius of a circle, we may need to complete the square.  Write an equivalent equation in which the left side is a perfect square:  We want to find a constant so that is a perfect square, namely . Now, , so , and . Thus, we add to both sides of the equation. Now we can write the left side as a perfect square:   Write an equivalent equation in which the left side is a perfect square:  For this equation, so . We add to both sides of the equation. We write the left sides as a perfect square, , and simplify the right side.   Write an equivalent equation in which the left side is a perfect square:  Write an equivalent equation in which the left side is a perfect square:    Conic Sections: Ellipses  Find points on a graph  Points on the graph of a conic subsection satisfy a quadratic equation in two variables.  Find all points on the graph of with -coordinate 2.  We substitute into the equation to obtain and simplify to . Solving for , we find . Thus, the points on the graph of with -coordinate 2 are and .   Find all points on the graph of with -coordinate 3.  Find all points on the graph of with -coordinate 3.  Find all points on the graph of with -coordinate .   Complete the square  To graph a conic subsection, we complete the square in each variable to put the equation in standard form.  Solve by completing the square.  We begin by isolating the constant term on the right side of the equation.   Solve by completing the square.  Solve by completing the square.  Solve by completing the square.     Conic Sections: Hyperbolas  Write a quadratic equation in standard form  The parameters in the standard form determine the shape of the graph.  Write the equation in the form   Recall that dividing by a fraction is equivalent to multiplying by its reciprocal. For instance, , and  Thus, for our example, So we can write the equation as .   Write each equation in the form        Find an asymptote  The points and are the midpoints of the four sides of a rectangle.  Sketch the rectangle.  Find equations for the diagonals of the rectangle.    The easiest way find the diagonals of the rectangle is to sketch it first. From the sketch at right, we can see that the center of the rectangle is , and the two upper vertices are and .  Both diagonals pass through the center, . The diagonal that passes through has slope   rectangle and diagoals  We use the point-slope formula to find its equation. Similarly, you can check that the diagonal that passes through has slope , and its equation is   The four points given are the midpoints of the four sides of a rectangle.  Sketch the rectangle.  Find equations for the diagonals of the rectangle.    rectangle and diagoals      rectangle and diagoals         Nonlinear Systems  Write a system of equations  Problems that involve two variables can sometimes be described by a system of equations.  The area of a rectangle is 874 square millimeters, and its perimeter is 122 millimeters. Write a system of equations for the dimensions of the rectangle.  We use the formulas for area and perimeter, where stands for the width of the rectangle, and stands for its length.   A small plane flies at a constant speed. In 5 hours, it travels 750 miles with a tailwind, but it travels only 600 miles in 5 hours against the wind. Write a system of equations for the speed of the plane and the speed of the wind.   We let stand for the speed of the plane, and stand for the speed of the wind. We use the formula .   Write a system of equations for the problem.  Darryl plans to mix some 50% solution with some 75% solution to make 20 liters of 60% solution. How much of each should he use?  The perimeter of a rectangle is 38 inches. If we triple the width and decrease the length by 8 inches, we increase the area of the rectangle by 40%. What are the dimensions of the original rectangle?  The express train travels 15 miles per hour faster than the local. The local takes 10 minutes longer to travel 30 miles than the express takes. Find the speed of each.  Delbert made $65 interest on his money market account this year. Francine invested $100 less than Delbert at 0.5% higher interest rate and earned $66. How much did Delbert invest, and at what interest rate?   Use substitution  We can use substitution to solve some systems of equations.  Use substitution to write an equation in one variable.  We solve the second equation for to get , and then substitute this expression into the first equation.   Use substitution to write an equation in one variable.      Find the intersection points of the graphs of   We will use substitution to solve the system. First we solve the \"easier\" of the two equations (the second equation) for to obtain We substitute for in the first equation to find This equation has only one variable, , and we solve it by first clearing fractions. We multiply both sides by , and then subtract to obtain Then we factor the left side to get and apply the zero-factor principle to find We solve each of these equations to find Finally, we substitute each of these values into to find the -components of each solution. The intersubsection points of the two graphs are and . The graph of the system is shown below.  conics   Find the intersection points of the graphs of    Use elimination  Find the solutions to the following system of the equations. Verify the solutions on a graph.  We multiply the first equation by 3 and the second by 60 to obtain the new system Adding these two equations, we have We substitute these values for into any of the equations involving and solve, to find the solutions and .  The two original equations describe a hyperbola and an ellipse. We can obtain graphs on a graphing utility by solving each equation for to get We enter these equations to obtain the graph shown below. The solutions of the system are the intersubsection points of the graphs.  conics   Find the intersection points of the graphs of  For some quadratic systems, we can use a combination of elimination of variables and substitution.  Find the intersection of the circles given by the equations.  We subtract the second equation from the first to obtain Solving for we have We substitute for into either of the original equations. We'll use the first equation. Thus or . From our first new equation we find that when , and when . Thus the two circles intersect at and , as shown below.  conics   Find the intersection points of the graphs of    "
},
{
  "id": "tkLineSlope-3",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-3",
  "type": "Example",
  "number": "A.9.1",
  "title": "",
  "body": "Find the slope of the line  The easiest way to find the slope of this line is to put its equation into slope-intercept form by solving for . The slope of the line is . "
},
{
  "id": "tkLineSlope-4",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-4",
  "type": "Example",
  "number": "A.9.2",
  "title": "",
  "body": "Find the slope of the line whose intercepts are and .  We use the slope formula.  "
},
{
  "id": "tkLineSlope-5",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-5",
  "type": "Checkpoint",
  "number": "A.9.3",
  "title": "",
  "body": "Find the slope of the line "
},
{
  "id": "tkLineSlope-6",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-6",
  "type": "Checkpoint",
  "number": "A.9.4",
  "title": "",
  "body": "Find the slope of the line undefined "
},
{
  "id": "tkLineSlope-7",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-7",
  "type": "Checkpoint",
  "number": "A.9.5",
  "title": "",
  "body": "Find the slope of the line that passes through and . "
},
{
  "id": "tkLineSlope-8",
  "level": "2",
  "url": "tkchap9.html#tkLineSlope-8",
  "type": "Checkpoint",
  "number": "A.9.6",
  "title": "",
  "body": "Find the slope of a line that describes a 35% grade (or incline). "
},
{
  "id": "tkPtSlopForm-3",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-3",
  "type": "Example",
  "number": "A.9.7",
  "title": "",
  "body": "Find the -intercept of the line of slope that passes through .  We first use the point-slope formula to find the equation of the line. The -intercept of the line is . "
},
{
  "id": "tkPtSlopForm-4",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-4",
  "type": "Example",
  "number": "A.9.8",
  "title": "",
  "body": "Find the equation of the line with -intercept that passes through .   We first compute the slope, using the two points given. Now we can use the point-slope formula.  "
},
{
  "id": "tkPtSlopForm-5",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-5",
  "type": "Checkpoint",
  "number": "A.9.9",
  "title": "",
  "body": "Find the equation of the line that has slope and passes through . "
},
{
  "id": "tkPtSlopForm-6",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-6",
  "type": "Checkpoint",
  "number": "A.9.10",
  "title": "",
  "body": "Find the equation of the line that has slope and passes through . "
},
{
  "id": "tkPtSlopForm-7",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-7",
  "type": "Checkpoint",
  "number": "A.9.11",
  "title": "",
  "body": "Find the -intercept of the line that passes through and has slope . "
},
{
  "id": "tkPtSlopForm-8",
  "level": "2",
  "url": "tkchap9.html#tkPtSlopForm-8",
  "type": "Checkpoint",
  "number": "A.9.12",
  "title": "",
  "body": "Find the -intercept of the line that has slope and passes through . "
},
{
  "id": "tkGeomProp-3",
  "level": "2",
  "url": "tkchap9.html#tkGeomProp-3",
  "type": "Example",
  "number": "A.9.13",
  "title": "",
  "body": "The figure shows isosceles triangle and its altitude . (Recall that the altitude of a triangle is the segment perpendicular to the base that passes through the opposite vertex.) For this problem, we'll use the following property:  In an isoceles triangle, the altitude bisects the base.  isosceles triangle   Find the equation of the line that includes .  Find the coordinates of point .  Find the length of the segment .    Because is perpendicular to , we can find its slope. The coordinates of and are and , so the slope of is The slope of is the negative reciprocal of , or .  Now we can use the point-slope formula with and the coordinates of to calculate the equation of the line.  Because the altitude bisects the base, point is the midpoint of . The coordinates of and are and , so we use the midpoint formula to find the coordinates of . The coordinates of are .  The coordinates of are , and the coordinates of are . We use the distance formula to find the length of .  "
},
{
  "id": "tkGeomProp-4",
  "level": "2",
  "url": "tkchap9.html#tkGeomProp-4",
  "type": "Checkpoint",
  "number": "A.9.14",
  "title": "",
  "body": "The line is tangent at point to a circle with center . For this problem, use the following property:  The tangent to a circle is perpendicular to the radius through the point of tangency.  circle and tangent line   Find the equation of the line through and .  Find the coordinates of .  Find the radius of the circle, .  Find the equation of the circle.     "
},
{
  "id": "tkGeomProp-5",
  "level": "2",
  "url": "tkchap9.html#tkGeomProp-5",
  "type": "Checkpoint",
  "number": "A.9.15",
  "title": "",
  "body": "In the right triangle shown, is parallel to the shorter leg, and . For this problem, use the following property:  A line parallel to the base of a triangle cuts off a similar triangle. (Recall that the sides of similar triangles are proportional.)  triangle cut parallel to base   Write an expression for in terms of .  Find an expression for in terms of .  If find an expression for in terms of .       "
},
{
  "id": "tkGeomProp-6",
  "level": "2",
  "url": "tkchap9.html#tkGeomProp-6",
  "type": "Checkpoint",
  "number": "A.9.16",
  "title": "",
  "body": "The quadrilateral has vertices and  triangle cut parallel to base   Show that is a parallelogram (its opposite sides are parallel).  Find equations for the lines through the diagonals, and .  Find the intersubsection of the diagonals, .  Find the lengths of and , and the lengths of and .  This example illustrates the following property of parallelograms:  The diagonals of a parallelogram each other.       bisect  "
},
{
  "id": "tkRadDist-3",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-3",
  "type": "Example",
  "number": "A.9.17",
  "title": "",
  "body": " In the right triangle shown, and .  Is ? Why or why not?  Find the length of .  right triangle   No, the length of is shorter than the lengths of and combined, so .  We use the Pythagorean theorem: The hypotenuse is 10 cm long.  "
},
{
  "id": "tkRadDist-4",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-4",
  "type": "Example",
  "number": "A.9.18",
  "title": "",
  "body": "Is ?  No. In the previous example, , and we saw that . We cannot simplify by taking the square root of each term. "
},
{
  "id": "tkRadDist-5",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-5",
  "type": "Example",
  "number": "A.9.19",
  "title": "",
  "body": "If , write and simplify expressions for:     . Or, .  . Or, .  "
},
{
  "id": "tkRadDist-6",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-6",
  "type": "Checkpoint",
  "number": "A.9.20",
  "title": "",
  "body": "Simplify if possible: cannot be simplified "
},
{
  "id": "tkRadDist-7",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-7",
  "type": "Checkpoint",
  "number": "A.9.21",
  "title": "",
  "body": "Simplify if possible: "
},
{
  "id": "tkRadDist-8",
  "level": "2",
  "url": "tkchap9.html#tkRadDist-8",
  "type": "Checkpoint",
  "number": "A.9.22",
  "title": "",
  "body": "Simplify if possible: "
},
{
  "id": "tkCircEqn-3",
  "level": "2",
  "url": "tkchap9.html#tkCircEqn-3",
  "type": "Example",
  "number": "A.9.23",
  "title": "",
  "body": "Does lie on the circle ?  We substitute into the equation for the circle. The point satisfies the equation, so it does lie on the circle. "
},
{
  "id": "tkCircEqn-4",
  "level": "2",
  "url": "tkchap9.html#tkCircEqn-4",
  "type": "Checkpoint",
  "number": "A.9.24",
  "title": "",
  "body": "Find a point with -coordinate that lies on the circle . and "
},
{
  "id": "tkCompSq-3",
  "level": "2",
  "url": "tkchap9.html#tkCompSq-3",
  "type": "Example",
  "number": "A.9.25",
  "title": "",
  "body": "Write an equivalent equation in which the left side is a perfect square:  We want to find a constant so that is a perfect square, namely . Now, , so , and . Thus, we add to both sides of the equation. Now we can write the left side as a perfect square:  "
},
{
  "id": "tkCompSq-4",
  "level": "2",
  "url": "tkchap9.html#tkCompSq-4",
  "type": "Example",
  "number": "A.9.26",
  "title": "",
  "body": "Write an equivalent equation in which the left side is a perfect square:  For this equation, so . We add to both sides of the equation. We write the left sides as a perfect square, , and simplify the right side.  "
},
{
  "id": "tkCompSq-5",
  "level": "2",
  "url": "tkchap9.html#tkCompSq-5",
  "type": "Checkpoint",
  "number": "A.9.27",
  "title": "",
  "body": "Write an equivalent equation in which the left side is a perfect square: "
},
{
  "id": "tkCompSq-6",
  "level": "2",
  "url": "tkchap9.html#tkCompSq-6",
  "type": "Checkpoint",
  "number": "A.9.28",
  "title": "",
  "body": "Write an equivalent equation in which the left side is a perfect square: "
},
{
  "id": "tkFindPts-3",
  "level": "2",
  "url": "tkchap9.html#tkFindPts-3",
  "type": "Example",
  "number": "A.9.29",
  "title": "",
  "body": "Find all points on the graph of with -coordinate 2.  We substitute into the equation to obtain and simplify to . Solving for , we find . Thus, the points on the graph of with -coordinate 2 are and .  "
},
{
  "id": "tkFindPts-4",
  "level": "2",
  "url": "tkchap9.html#tkFindPts-4",
  "type": "Checkpoint",
  "number": "A.9.30",
  "title": "",
  "body": "Find all points on the graph of with -coordinate 3. "
},
{
  "id": "tkFindPts-5",
  "level": "2",
  "url": "tkchap9.html#tkFindPts-5",
  "type": "Checkpoint",
  "number": "A.9.31",
  "title": "",
  "body": "Find all points on the graph of with -coordinate 3. "
},
{
  "id": "tkFindPts-6",
  "level": "2",
  "url": "tkchap9.html#tkFindPts-6",
  "type": "Checkpoint",
  "number": "A.9.32",
  "title": "",
  "body": "Find all points on the graph of with -coordinate . "
},
{
  "id": "tkConCompSq-3",
  "level": "2",
  "url": "tkchap9.html#tkConCompSq-3",
  "type": "Example",
  "number": "A.9.33",
  "title": "",
  "body": "Solve by completing the square.  We begin by isolating the constant term on the right side of the equation.  "
},
{
  "id": "tkConCompSq-4",
  "level": "2",
  "url": "tkchap9.html#tkConCompSq-4",
  "type": "Checkpoint",
  "number": "A.9.34",
  "title": "",
  "body": "Solve by completing the square. "
},
{
  "id": "tkConCompSq-5",
  "level": "2",
  "url": "tkchap9.html#tkConCompSq-5",
  "type": "Checkpoint",
  "number": "A.9.35",
  "title": "",
  "body": "Solve by completing the square. "
},
{
  "id": "tkConCompSq-6",
  "level": "2",
  "url": "tkchap9.html#tkConCompSq-6",
  "type": "Checkpoint",
  "number": "A.9.36",
  "title": "",
  "body": "Solve by completing the square. "
},
{
  "id": "tkQuadStdForm-3",
  "level": "2",
  "url": "tkchap9.html#tkQuadStdForm-3",
  "type": "Example",
  "number": "A.9.37",
  "title": "",
  "body": "Write the equation in the form   Recall that dividing by a fraction is equivalent to multiplying by its reciprocal. For instance, , and  Thus, for our example, So we can write the equation as .  "
},
{
  "id": "tkQuadStdForm-5",
  "level": "2",
  "url": "tkchap9.html#tkQuadStdForm-5",
  "type": "Checkpoint",
  "number": "A.9.38",
  "title": "",
  "body": ""
},
{
  "id": "tkQuadStdForm-6",
  "level": "2",
  "url": "tkchap9.html#tkQuadStdForm-6",
  "type": "Checkpoint",
  "number": "A.9.39",
  "title": "",
  "body": ""
},
{
  "id": "tkQuadStdForm-7",
  "level": "2",
  "url": "tkchap9.html#tkQuadStdForm-7",
  "type": "Checkpoint",
  "number": "A.9.40",
  "title": "",
  "body": ""
},
{
  "id": "tkQuadStdForm-8",
  "level": "2",
  "url": "tkchap9.html#tkQuadStdForm-8",
  "type": "Checkpoint",
  "number": "A.9.41",
  "title": "",
  "body": ""
},
{
  "id": "tkFindAsy-2",
  "level": "2",
  "url": "tkchap9.html#tkFindAsy-2",
  "type": "Example",
  "number": "A.9.42",
  "title": "",
  "body": "The points and are the midpoints of the four sides of a rectangle.  Sketch the rectangle.  Find equations for the diagonals of the rectangle.    The easiest way find the diagonals of the rectangle is to sketch it first. From the sketch at right, we can see that the center of the rectangle is , and the two upper vertices are and .  Both diagonals pass through the center, . The diagonal that passes through has slope   rectangle and diagoals  We use the point-slope formula to find its equation. Similarly, you can check that the diagonal that passes through has slope , and its equation is  "
},
{
  "id": "tkFindAsy-4",
  "level": "2",
  "url": "tkchap9.html#tkFindAsy-4",
  "type": "Checkpoint",
  "number": "A.9.43",
  "title": "",
  "body": " rectangle and diagoals    "
},
{
  "id": "tkFindAsy-5",
  "level": "2",
  "url": "tkchap9.html#tkFindAsy-5",
  "type": "Checkpoint",
  "number": "A.9.44",
  "title": "",
  "body": " rectangle and diagoals     "
},
{
  "id": "tkWriteSys-3",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-3",
  "type": "Example",
  "number": "A.9.45",
  "title": "",
  "body": "The area of a rectangle is 874 square millimeters, and its perimeter is 122 millimeters. Write a system of equations for the dimensions of the rectangle.  We use the formulas for area and perimeter, where stands for the width of the rectangle, and stands for its length.  "
},
{
  "id": "tkWriteSys-4",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-4",
  "type": "Example",
  "number": "A.9.46",
  "title": "",
  "body": "A small plane flies at a constant speed. In 5 hours, it travels 750 miles with a tailwind, but it travels only 600 miles in 5 hours against the wind. Write a system of equations for the speed of the plane and the speed of the wind.   We let stand for the speed of the plane, and stand for the speed of the wind. We use the formula .  "
},
{
  "id": "tkWriteSys-6",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-6",
  "type": "Checkpoint",
  "number": "A.9.47",
  "title": "",
  "body": "Darryl plans to mix some 50% solution with some 75% solution to make 20 liters of 60% solution. How much of each should he use? "
},
{
  "id": "tkWriteSys-7",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-7",
  "type": "Checkpoint",
  "number": "A.9.48",
  "title": "",
  "body": "The perimeter of a rectangle is 38 inches. If we triple the width and decrease the length by 8 inches, we increase the area of the rectangle by 40%. What are the dimensions of the original rectangle? "
},
{
  "id": "tkWriteSys-8",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-8",
  "type": "Checkpoint",
  "number": "A.9.49",
  "title": "",
  "body": "The express train travels 15 miles per hour faster than the local. The local takes 10 minutes longer to travel 30 miles than the express takes. Find the speed of each. "
},
{
  "id": "tkWriteSys-9",
  "level": "2",
  "url": "tkchap9.html#tkWriteSys-9",
  "type": "Checkpoint",
  "number": "A.9.50",
  "title": "",
  "body": "Delbert made $65 interest on his money market account this year. Francine invested $100 less than Delbert at 0.5% higher interest rate and earned $66. How much did Delbert invest, and at what interest rate? "
},
{
  "id": "tkSubst-3",
  "level": "2",
  "url": "tkchap9.html#tkSubst-3",
  "type": "Example",
  "number": "A.9.51",
  "title": "",
  "body": "Use substitution to write an equation in one variable.  We solve the second equation for to get , and then substitute this expression into the first equation.  "
},
{
  "id": "tkSubst-5",
  "level": "2",
  "url": "tkchap9.html#tkSubst-5",
  "type": "Checkpoint",
  "number": "A.9.52",
  "title": "",
  "body": ""
},
{
  "id": "tkSubst-6",
  "level": "2",
  "url": "tkchap9.html#tkSubst-6",
  "type": "Checkpoint",
  "number": "A.9.53",
  "title": "",
  "body": ""
},
{
  "id": "tkSubst-7",
  "level": "2",
  "url": "tkchap9.html#tkSubst-7",
  "type": "Checkpoint",
  "number": "A.9.54",
  "title": "",
  "body": ""
},
{
  "id": "tkSubst-8",
  "level": "2",
  "url": "tkchap9.html#tkSubst-8",
  "type": "Checkpoint",
  "number": "A.9.55",
  "title": "",
  "body": ""
},
{
  "id": "tkSubst-9",
  "level": "2",
  "url": "tkchap9.html#tkSubst-9",
  "type": "Example",
  "number": "A.9.56",
  "title": "",
  "body": "Find the intersection points of the graphs of   We will use substitution to solve the system. First we solve the \"easier\" of the two equations (the second equation) for to obtain We substitute for in the first equation to find This equation has only one variable, , and we solve it by first clearing fractions. We multiply both sides by , and then subtract to obtain Then we factor the left side to get and apply the zero-factor principle to find We solve each of these equations to find Finally, we substitute each of these values into to find the -components of each solution. The intersubsection points of the two graphs are and . The graph of the system is shown below.  conics  "
},
{
  "id": "tkSubst-10",
  "level": "2",
  "url": "tkchap9.html#tkSubst-10",
  "type": "Checkpoint",
  "number": "A.9.57",
  "title": "",
  "body": "Find the intersection points of the graphs of  "
},
{
  "id": "tkElim-2",
  "level": "2",
  "url": "tkchap9.html#tkElim-2",
  "type": "Example",
  "number": "A.9.58",
  "title": "",
  "body": "Find the solutions to the following system of the equations. Verify the solutions on a graph.  We multiply the first equation by 3 and the second by 60 to obtain the new system Adding these two equations, we have We substitute these values for into any of the equations involving and solve, to find the solutions and .  The two original equations describe a hyperbola and an ellipse. We can obtain graphs on a graphing utility by solving each equation for to get We enter these equations to obtain the graph shown below. The solutions of the system are the intersubsection points of the graphs.  conics  "
},
{
  "id": "tkElim-3",
  "level": "2",
  "url": "tkchap9.html#tkElim-3",
  "type": "Checkpoint",
  "number": "A.9.59",
  "title": "",
  "body": "Find the intersection points of the graphs of "
},
{
  "id": "tkElim-5",
  "level": "2",
  "url": "tkchap9.html#tkElim-5",
  "type": "Example",
  "number": "A.9.60",
  "title": "",
  "body": "Find the intersection of the circles given by the equations.  We subtract the second equation from the first to obtain Solving for we have We substitute for into either of the original equations. We'll use the first equation. Thus or . From our first new equation we find that when , and when . Thus the two circles intersect at and , as shown below.  conics  "
},
{
  "id": "tkElim-6",
  "level": "2",
  "url": "tkchap9.html#tkElim-6",
  "type": "Checkpoint",
  "number": "A.9.61",
  "title": "",
  "body": "Find the intersection points of the graphs of "
},
{
  "id": "tkchap10",
  "level": "1",
  "url": "tkchap10.html",
  "type": "Section",
  "number": "A.10",
  "title": "Chapter 10 Logarithmic Functions",
  "body": "Chapter 10 Logarithmic Functions  Logarithmic Functions   Graph log functions  One way to graph a log function is to first make a table of values for its inverse function, the exponential function with the same base, then interchange the variables.   Complete the table of values and graph on the same grid: and                                     grid  Use your tables from part (a) to graph and on the same grid.  grid   graph  > graph    Use function notation  A log function is the inverse of the exponential function with the same base, and vice versa.  For each function , decide whether .      and  But is not equivalent to in fact  So for this function, .  and  But is not equivalent to in fact  So for this function, .   . Evaluate and simplify if possible.        and is its inverese function. Evaluate if possible.           undefined   Evaluate if possible.   , where is the inverse function for       undefined    . Evaluate and simplify if possible.      cannot be simplified    Use the properties of logarithms  The three properties of logarithms are helpful in making computations involving logs.  Properties of Logarithms  If , , , and , then      If and , what is ?  Because ,  If and , what is ?  Because ,  Take the log of each number. What do you notice?            Compare the two operations. What do you notice?  (i) Compute (ii) Solve for  (i) Compute (ii) Solve for   (i) and (ii) have the same answer:  (i) and (ii) have the same answer:    The ratio of to is . Compute .  . Compute .         Logarithmic Scales  Plot a log scale  Because grows very slowly, we can use logs to compare quantities that vary greatly in magnitude.   Complete the table. Round the values to one decimal place.                  Plot the values of on a log scale.  log scale  Each time we multiply by 5, how much does the logarithm increase? What is , to one decimal place?                    log scale  Each time we multiply by 5, the log of increases by 0.7, because . This is an application of the log properties:    Complete the table. Round the values to one decimal place.                  Plot the values of on a log scale.  log scale  Each time we multiply by 2, how much does the logarithm increase? What is , to one decimal place?                    log scale     Complete the table. Round the values to one decimal place.                    Plot the values of on a log scale.  log scale  Each time we multiply by 4, how much does the logarithm increase? What is , to one decimal place?                     log scale      Compare quantities  There is often more than one way to express a comparison with mathematical notation.  When we say that \" is 3 times larger than ,\" we mean that .   When we say that \" is 3 more than ,\" we mean that .                  From the list above, match all the correct algebraic expressions to the phrase \" is 5 times as large as .\" (a), (i), (l)  From the list above, match all the correct algebraic expressions to the phrase \" is 5 more than .\" (c), (g)     The Natural Base  Graphs of and  The graphs of the natural exponential function and the natural log function have some special properties.  Use technology to graph and in a window with and . What do you notice about the two graphs? graph  The line is tangent to the graph at .   Use technology to graph and in a window with and . What do you notice about the two graphs? graph  The line is tangent to the graph at .    Using growth and decay laws with base  We can write exponential growth and decay laws using base .  Exponential Growth and Decay  The function describes exponential growth if , and exponential decay if .   A colony of bees grows at a rate of 8% annually. Write its growth law using base .  The growth factor is , so the growth law can be written as Using base , we write where (You can see this by evaluating each growth law at .) So we solve for . The growth law is .   A radioactive isotope decays according to the formula where is in hours. Find its percent rate of decay.  First we write the decay law in the form where  In this case, so Now, and solving for we find The rate of decay is approximately 16% per hour.   A virus spreads in the population at a rate of 19.5% daily. Write its growth law using base .  Sea ice is decreasing at a rate of 12.85% per decade. Write its decay law using base .  In 2020, the world population was growing according to the formula where is in years. Find its percent rate of growth. 5%  Since 1984, the population of cod has decreased annually according to the formula Find its percent rate of decay. 17%     "
},
{
  "id": "tkGraphLogFncn-3",
  "level": "2",
  "url": "tkchap10.html#tkGraphLogFncn-3",
  "type": "Checkpoint",
  "number": "A.10.1",
  "title": "",
  "body": " Complete the table of values and graph on the same grid: and                                     grid  Use your tables from part (a) to graph and on the same grid.  grid   graph  > graph  "
},
{
  "id": "tkUseFncnNot-3",
  "level": "2",
  "url": "tkchap10.html#tkUseFncnNot-3",
  "type": "Example",
  "number": "A.10.2",
  "title": "",
  "body": "For each function , decide whether .      and  But is not equivalent to in fact  So for this function, .  and  But is not equivalent to in fact  So for this function, .  "
},
{
  "id": "tkUseFncnNot-4",
  "level": "2",
  "url": "tkchap10.html#tkUseFncnNot-4",
  "type": "Checkpoint",
  "number": "A.10.3",
  "title": "",
  "body": ". Evaluate and simplify if possible.       "
},
{
  "id": "tkUseFncnNot-5",
  "level": "2",
  "url": "tkchap10.html#tkUseFncnNot-5",
  "type": "Example",
  "number": "A.10.4",
  "title": "",
  "body": "and is its inverese function. Evaluate if possible.           undefined  "
},
{
  "id": "tkUseFncnNot-6",
  "level": "2",
  "url": "tkchap10.html#tkUseFncnNot-6",
  "type": "Checkpoint",
  "number": "A.10.5",
  "title": "",
  "body": "Evaluate if possible.   , where is the inverse function for       undefined   "
},
{
  "id": "tkUseFncnNot-7",
  "level": "2",
  "url": "tkchap10.html#tkUseFncnNot-7",
  "type": "Checkpoint",
  "number": "A.10.6",
  "title": "",
  "body": ". Evaluate and simplify if possible.      cannot be simplified  "
},
{
  "id": "tkUseLogProps-4",
  "level": "2",
  "url": "tkchap10.html#tkUseLogProps-4",
  "type": "Example",
  "number": "A.10.7",
  "title": "",
  "body": "If and , what is ?  Because , "
},
{
  "id": "tkUseLogProps-5",
  "level": "2",
  "url": "tkchap10.html#tkUseLogProps-5",
  "type": "Example",
  "number": "A.10.8",
  "title": "",
  "body": "If and , what is ?  Because , "
},
{
  "id": "tkUseLogProps-6",
  "level": "2",
  "url": "tkchap10.html#tkUseLogProps-6",
  "type": "Checkpoint",
  "number": "A.10.9",
  "title": "",
  "body": "Take the log of each number. What do you notice?           "
},
{
  "id": "tkUseLogProps-7",
  "level": "2",
  "url": "tkchap10.html#tkUseLogProps-7",
  "type": "Checkpoint",
  "number": "A.10.10",
  "title": "",
  "body": "Compare the two operations. What do you notice?  (i) Compute (ii) Solve for  (i) Compute (ii) Solve for   (i) and (ii) have the same answer:  (i) and (ii) have the same answer:  "
},
{
  "id": "tkUseLogProps-8",
  "level": "2",
  "url": "tkchap10.html#tkUseLogProps-8",
  "type": "Checkpoint",
  "number": "A.10.11",
  "title": "",
  "body": " The ratio of to is . Compute .  . Compute .     "
},
{
  "id": "tkLogScale-3",
  "level": "2",
  "url": "tkchap10.html#tkLogScale-3",
  "type": "Example",
  "number": "A.10.12",
  "title": "",
  "body": " Complete the table. Round the values to one decimal place.                  Plot the values of on a log scale.  log scale  Each time we multiply by 5, how much does the logarithm increase? What is , to one decimal place?                    log scale  Each time we multiply by 5, the log of increases by 0.7, because . This is an application of the log properties:  "
},
{
  "id": "tkLogScale-4",
  "level": "2",
  "url": "tkchap10.html#tkLogScale-4",
  "type": "Checkpoint",
  "number": "A.10.13",
  "title": "",
  "body": " Complete the table. Round the values to one decimal place.                  Plot the values of on a log scale.  log scale  Each time we multiply by 2, how much does the logarithm increase? What is , to one decimal place?                    log scale   "
},
{
  "id": "tkLogScale-5",
  "level": "2",
  "url": "tkchap10.html#tkLogScale-5",
  "type": "Checkpoint",
  "number": "A.10.14",
  "title": "",
  "body": " Complete the table. Round the values to one decimal place.                    Plot the values of on a log scale.  log scale  Each time we multiply by 4, how much does the logarithm increase? What is , to one decimal place?                     log scale    "
},
{
  "id": "tkCompQuant-3",
  "level": "2",
  "url": "tkchap10.html#tkCompQuant-3",
  "type": "Example",
  "number": "A.10.15",
  "title": "",
  "body": "When we say that \" is 3 times larger than ,\" we mean that .  "
},
{
  "id": "tkCompQuant-4",
  "level": "2",
  "url": "tkchap10.html#tkCompQuant-4",
  "type": "Example",
  "number": "A.10.16",
  "title": "",
  "body": "When we say that \" is 3 more than ,\" we mean that .  "
},
{
  "id": "tkCompQuant-6",
  "level": "2",
  "url": "tkchap10.html#tkCompQuant-6",
  "type": "Checkpoint",
  "number": "A.10.17",
  "title": "",
  "body": "From the list above, match all the correct algebraic expressions to the phrase \" is 5 times as large as .\" (a), (i), (l) "
},
{
  "id": "tkCompQuant-7",
  "level": "2",
  "url": "tkchap10.html#tkCompQuant-7",
  "type": "Checkpoint",
  "number": "A.10.18",
  "title": "",
  "body": "From the list above, match all the correct algebraic expressions to the phrase \" is 5 more than .\" (c), (g) "
},
{
  "id": "tkGraphBaseE-3",
  "level": "2",
  "url": "tkchap10.html#tkGraphBaseE-3",
  "type": "Checkpoint",
  "number": "A.10.19",
  "title": "",
  "body": "Use technology to graph and in a window with and . What do you notice about the two graphs? graph  The line is tangent to the graph at .  "
},
{
  "id": "tkGraphBaseE-4",
  "level": "2",
  "url": "tkchap10.html#tkGraphBaseE-4",
  "type": "Checkpoint",
  "number": "A.10.20",
  "title": "",
  "body": "Use technology to graph and in a window with and . What do you notice about the two graphs? graph  The line is tangent to the graph at .  "
},
{
  "id": "tkUseBaseE-4",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-4",
  "type": "Example",
  "number": "A.10.21",
  "title": "",
  "body": "A colony of bees grows at a rate of 8% annually. Write its growth law using base .  The growth factor is , so the growth law can be written as Using base , we write where (You can see this by evaluating each growth law at .) So we solve for . The growth law is .  "
},
{
  "id": "tkUseBaseE-5",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-5",
  "type": "Example",
  "number": "A.10.22",
  "title": "",
  "body": "A radioactive isotope decays according to the formula where is in hours. Find its percent rate of decay.  First we write the decay law in the form where  In this case, so Now, and solving for we find The rate of decay is approximately 16% per hour.  "
},
{
  "id": "tkUseBaseE-6",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-6",
  "type": "Checkpoint",
  "number": "A.10.23",
  "title": "",
  "body": "A virus spreads in the population at a rate of 19.5% daily. Write its growth law using base . "
},
{
  "id": "tkUseBaseE-7",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-7",
  "type": "Checkpoint",
  "number": "A.10.24",
  "title": "",
  "body": "Sea ice is decreasing at a rate of 12.85% per decade. Write its decay law using base . "
},
{
  "id": "tkUseBaseE-8",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-8",
  "type": "Checkpoint",
  "number": "A.10.25",
  "title": "",
  "body": "In 2020, the world population was growing according to the formula where is in years. Find its percent rate of growth. 5% "
},
{
  "id": "tkUseBaseE-9",
  "level": "2",
  "url": "tkchap10.html#tkUseBaseE-9",
  "type": "Checkpoint",
  "number": "A.10.26",
  "title": "",
  "body": "Since 1984, the population of cod has decreased annually according to the formula Find its percent rate of decay. 17% "
},
{
  "id": "GGB-getting-started",
  "level": "1",
  "url": "GGB-getting-started.html",
  "type": "Section",
  "number": "B.1",
  "title": "Getting Started",
  "body": "Getting Started  On and Off  If you are reading this textbook in a web browser using a computer with sufficiently wide monitor, you should see button labeled \"Calc\" just above the text on the page. Clicking on that button will launch a Geogebra calculator applet in the right margin of the book. If the calculator overlaps the text, click on the \"Contents\" tab above the navigation panel to hide that panel and provide more space for the text. Click again on the \"Calc\" button to close the calculator app. (And clicking again on the \"Contents\" tab will re-open the navigation panel.)   Numbers and Operations   Compute .  Enter   and even before we press , GeoGebra shows the result below the input box.  If we do press , GeoGebra shows     in an output history region above the input box. There is a scroll bar to the right of the output history and the input box.    Compute .  Enter   to see the result    We press to tell the calculator to store the computation. We can use the scroll bar to see the input box or the output history of previous computations.  The calculator has a key for the value of .   Compute .  Enter   or   to get the approximation     Delete and Undo  Press the backspace key (shown in the keyboard image ) to delete the character before the cursor or any highlighted characters.  To remove an item from the output history, tap the kebab menu icon (three vertically stacked dots) to the right of the item, then tap \"Delete\".  To remove the most recent item in the output history, tap the Undo icon in the Graphics View. (The icon looks like an arched arrow pointing left.)   "
},
{
  "id": "GGB-getting-started-3-2",
  "level": "2",
  "url": "GGB-getting-started.html#GGB-getting-started-3-2",
  "type": "Example",
  "number": "B.1.1",
  "title": "",
  "body": " Compute .  Enter   and even before we press , GeoGebra shows the result below the input box.  If we do press , GeoGebra shows     in an output history region above the input box. There is a scroll bar to the right of the output history and the input box.  "
},
{
  "id": "GGB-getting-started-3-3",
  "level": "2",
  "url": "GGB-getting-started.html#GGB-getting-started-3-3",
  "type": "Example",
  "number": "B.1.2",
  "title": "",
  "body": " Compute .  Enter   to see the result   "
},
{
  "id": "GGB-getting-started-3-6",
  "level": "2",
  "url": "GGB-getting-started.html#GGB-getting-started-3-6",
  "type": "Example",
  "number": "B.1.3",
  "title": "",
  "body": " Compute .  Enter   or   to get the approximation   "
},
{
  "id": "GGB-Entering-Expressions",
  "level": "1",
  "url": "GGB-Entering-Expressions.html",
  "type": "Section",
  "number": "B.2",
  "title": "Entering Expressions",
  "body": "Entering Expressions  Parentheses   Order of Operations : The calculator follows the standard order of operations.   Compute .   Enter +       Ans.      Compute .   Enter (   +   )      Ans.      Fractions   Compute .   Enter (   +   )      Ans.      GeoGebra displays \"built-up\" fractions like . Once we enter the numerator and select the key, the cursor is in the denominator and will stay there until we use an arrow key on the keyboard to move the cursor outside the fraction, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .    Compute .   Enter        Ans.    In the output history, there is an approximation icon that looks like the \" \" symbol in a blue square. To get a decimal approximation of the fraction, click on that icon.  Ans.     Compute .   Enter         Ans.      Exponents and Powers  The key for exponents and the key for squaring are shown in the keyboard image .   Evaluate .  Enter , then the squaring key, then   OR  Enter , then the exponent key, then    Ans.     Evaluate .   Enter , and then the exponent key, 10   Ans.      GeoGebra nicely displays powers such as , with the exponent raised like a superscript. Once we enter the base and select the exponent key, the cursor is in the exponent and will stay there until we use the arrow keys to move the cursor outside the power, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .    Evaluate .  Enter , then the exponent key, then      Ans.     Evaluate .  Enter , then the exponent key, then       Ans.     Square Roots  The key for square roots is shown in the keyboard image .   Evaluate .   Select the square root key, then enter    Ans.      GeoGebra nicely displays square roots such as , with the radicand inside the square root \"house\". Once we select the square root key, the cursor is in under the radical and will stay there until we use the arrow keys to move the cursor outside, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .    Evaluate .  Select the square root key, then enter      Ans.     Evaluate .  Select the square root key, then enter       Ans.     Other Roots  If we click on the \"f(x)\" on the keyboard in the Algebra View, we see other built-in keys.   GeoGebra calculator f(x) keyboard   GeoGebra calculator f(x) keyboard     Compute .  Choose the f(x) keyboard, select the nth root key, go back to the standard 123 keyboard, then enter      Ans.     Compute .  Choose the f(x) keyboard, select the nth root key, go back to the standard 123 keyboard, then enter        Ans.     Absolute Value  GeoGebra nicely displays the vertical bars of the standard absolute value notation, such as in the expression . Once we select the absolute value key, the cursor is in between the vertical bars and will stay there until we use the arrow keys to move the cursor outside, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .   Evaluate .  Select the absolute value key, then enter           Ans.     Scientific Notation  The GeoGebra calculator does not display scientific notation by default. The calculator can display scientific notation in the Grahics View by using a ScientificText command.   Compute .   Enter     Ans.    We will enter ScientificText in the input box.   On the computer, typing the first three letters (sci) is enough for the full command to appear as an option.    On a phone app, we tap on the overflow menu (three horizontal dots) on the top right of the virtual keyboard (see keyboard image ), tap in the Search in All Commands field, then start to input ScientificText until the full command appears as an option.   We click on ScientificText, and the cursor is appropriately positioned, ready for us to enter an expression. We can either repeat the calculation we entered above, or, more efficiently, select the last answer key ans and .  The result , appears on the grid in the Graphics View. We can drag the text within the Graphics View, change its color, and\/or delete it.  We could also type in the entire command scientifictext using the ABC keyboard, then use the 123 keyboard to enter the parentheses and numbers.    Editing an Entry  We can edit an expression without starting again. The backspace key will remove the character to the left of the cursor. We can move the cursor within an input line using the arrow keys or by clicking in the appropriate place.  We can recall any previous entry by finding it in the output history (scrolling up if necessary), tapping on the kebab menu icon (three vertical dots), and selecting Duplicate. The command will be copied into the current input box, which we can edit before pressing .  If the menu does not appear  Sometimes when using the GeoGebra app embedded in this textbook, the menu does not appear when we tap on the kebab menu icon. This may occur when we are at a place in the section far from the top of the webpage. Try scrolling within the webpage to the top, and tap on the kebab menu icon again.   If we just want to use the most recent result in the current command, we use the ans key.   Evaluate and then take the square root of the sum.  Enter , then the square key, then  , the square key again, then   Ans.   Now select the square root key, then ans    Ans.     "
},
{
  "id": "GGB-Entering-Expressions-2-2",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Order of Operations "
},
{
  "id": "GGB-Entering-Expressions-2-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-2-3",
  "type": "Example",
  "number": "B.2.1",
  "title": "",
  "body": " Compute .   Enter +       Ans.    "
},
{
  "id": "GGB-Entering-Expressions-2-4",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-2-4",
  "type": "Example",
  "number": "B.2.2",
  "title": "",
  "body": " Compute .   Enter (   +   )      Ans.    "
},
{
  "id": "GGB-Entering-Expressions-3-2",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-3-2",
  "type": "Example",
  "number": "B.2.3",
  "title": "",
  "body": " Compute .   Enter (   +   )      Ans.    "
},
{
  "id": "GGB-Entering-Expressions-3-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-3-3",
  "type": "Caution",
  "number": "B.2.4",
  "title": "",
  "body": " GeoGebra displays \"built-up\" fractions like . Once we enter the numerator and select the key, the cursor is in the denominator and will stay there until we use an arrow key on the keyboard to move the cursor outside the fraction, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .  "
},
{
  "id": "example-approximate",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#example-approximate",
  "type": "Example",
  "number": "B.2.5",
  "title": "",
  "body": " Compute .   Enter        Ans.    In the output history, there is an approximation icon that looks like the \" \" symbol in a blue square. To get a decimal approximation of the fraction, click on that icon.  Ans.   "
},
{
  "id": "GGB-Entering-Expressions-3-5",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-3-5",
  "type": "Example",
  "number": "B.2.6",
  "title": "",
  "body": " Compute .   Enter         Ans.    "
},
{
  "id": "GGB-Entering-Expressions-4-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-4-3",
  "type": "Example",
  "number": "B.2.7",
  "title": "",
  "body": " Evaluate .  Enter , then the squaring key, then   OR  Enter , then the exponent key, then    Ans.   "
},
{
  "id": "GGB-Entering-Expressions-4-4",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-4-4",
  "type": "Example",
  "number": "B.2.8",
  "title": "",
  "body": " Evaluate .   Enter , and then the exponent key, 10   Ans.    "
},
{
  "id": "GGB-Entering-Expressions-4-5",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-4-5",
  "type": "Caution",
  "number": "B.2.9",
  "title": "",
  "body": " GeoGebra nicely displays powers such as , with the exponent raised like a superscript. Once we enter the base and select the exponent key, the cursor is in the exponent and will stay there until we use the arrow keys to move the cursor outside the power, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .  "
},
{
  "id": "GGB-Entering-Expressions-4-6",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-4-6",
  "type": "Example",
  "number": "B.2.10",
  "title": "",
  "body": " Evaluate .  Enter , then the exponent key, then      Ans.   "
},
{
  "id": "GGB-Entering-Expressions-4-7",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-4-7",
  "type": "Example",
  "number": "B.2.11",
  "title": "",
  "body": " Evaluate .  Enter , then the exponent key, then       Ans.   "
},
{
  "id": "GGB-Entering-Expressions-5-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-5-3",
  "type": "Example",
  "number": "B.2.12",
  "title": "",
  "body": " Evaluate .   Select the square root key, then enter    Ans.    "
},
{
  "id": "GGB-Entering-Expressions-5-4",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-5-4",
  "type": "Caution",
  "number": "B.2.13",
  "title": "",
  "body": " GeoGebra nicely displays square roots such as , with the radicand inside the square root \"house\". Once we select the square root key, the cursor is in under the radical and will stay there until we use the arrow keys to move the cursor outside, or until we press . The arrow keys on the virtual keyboard are shown in the keyboard image .  "
},
{
  "id": "GGB-Entering-Expressions-5-5",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-5-5",
  "type": "Example",
  "number": "B.2.14",
  "title": "",
  "body": " Evaluate .  Select the square root key, then enter      Ans.   "
},
{
  "id": "GGB-Entering-Expressions-5-6",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-5-6",
  "type": "Example",
  "number": "B.2.15",
  "title": "",
  "body": " Evaluate .  Select the square root key, then enter       Ans.   "
},
{
  "id": "fig-GGB-fx-keyboard",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#fig-GGB-fx-keyboard",
  "type": "Figure",
  "number": "B.2.16",
  "title": "",
  "body": " GeoGebra calculator f(x) keyboard   GeoGebra calculator f(x) keyboard   "
},
{
  "id": "GGB-Entering-Expressions-6-4",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-6-4",
  "type": "Example",
  "number": "B.2.17",
  "title": "",
  "body": " Compute .  Choose the f(x) keyboard, select the nth root key, go back to the standard 123 keyboard, then enter      Ans.   "
},
{
  "id": "GGB-Entering-Expressions-6-5",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-6-5",
  "type": "Example",
  "number": "B.2.18",
  "title": "",
  "body": " Compute .  Choose the f(x) keyboard, select the nth root key, go back to the standard 123 keyboard, then enter        Ans.   "
},
{
  "id": "GGB-Entering-Expressions-7-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-7-3",
  "type": "Example",
  "number": "B.2.19",
  "title": "",
  "body": " Evaluate .  Select the absolute value key, then enter           Ans.   "
},
{
  "id": "GGB-Entering-Expressions-8-3",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-8-3",
  "type": "Example",
  "number": "B.2.20",
  "title": "",
  "body": " Compute .   Enter     Ans.    We will enter ScientificText in the input box.   On the computer, typing the first three letters (sci) is enough for the full command to appear as an option.    On a phone app, we tap on the overflow menu (three horizontal dots) on the top right of the virtual keyboard (see keyboard image ), tap in the Search in All Commands field, then start to input ScientificText until the full command appears as an option.   We click on ScientificText, and the cursor is appropriately positioned, ready for us to enter an expression. We can either repeat the calculation we entered above, or, more efficiently, select the last answer key ans and .  The result , appears on the grid in the Graphics View. We can drag the text within the Graphics View, change its color, and\/or delete it.  We could also type in the entire command scientifictext using the ABC keyboard, then use the 123 keyboard to enter the parentheses and numbers.  "
},
{
  "id": "note-no-menu",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#note-no-menu",
  "type": "Note",
  "number": "B.2.21",
  "title": "If the menu does not appear.",
  "body": "If the menu does not appear  Sometimes when using the GeoGebra app embedded in this textbook, the menu does not appear when we tap on the kebab menu icon. This may occur when we are at a place in the section far from the top of the webpage. Try scrolling within the webpage to the top, and tap on the kebab menu icon again.  "
},
{
  "id": "GGB-Entering-Expressions-9-6",
  "level": "2",
  "url": "GGB-Entering-Expressions.html#GGB-Entering-Expressions-9-6",
  "type": "Example",
  "number": "B.2.22",
  "title": "",
  "body": " Evaluate and then take the square root of the sum.  Enter , then the square key, then  , the square key again, then   Ans.   Now select the square root key, then ans    Ans.   "
},
{
  "id": "GGB-Graphing-an-Equation",
  "level": "1",
  "url": "GGB-Graphing-an-Equation.html",
  "type": "Section",
  "number": "B.3",
  "title": "Graphing an Equation",
  "body": "Graphing an Equation  We can graph equations in the variables and . The variable keys are located on the top row of the app 123 keyboard. There are two steps to graphing an equation:  Entering the equation  Setting the graphing window    A Basic Graph with intercepts     Graph the equation .  In the Algebra View, Press    =   .  The output history shows and the Graphics View shows the line passing through the points and . If we click on either of these two points, GeoGebra will show a label and the coordinates.    x+y=2 on Geogebra calculator     Special Points on a Graph  GeoGebra automatically highlights \"Special Points\" with heavy dots on the graph of an equation. GeoGebra will show a label and the coordinates of any Special Point when we clicking on it.  In particular, any intercepts of a graph are Special Points.   The size and appearance of the displayed graph will vary with the display size and orientation of device we use. We can hide the Algebra View to increase the size of the Graphics View by clicking on the arrow key at the right edge of the border between the Algebra View and the Graphics View. Clicking again on the arrow key brings back the Algebra View.   Translate and Zoom  We can adjust \"graphing window\", called the \"Graphics View\" in GeoGebra, without entering numerical values.   Continuing from , drag within the Graphics View so that you can see the point on the graph where . Then zoom out until you can see both that point and the origin.    Solution: If we click on the arrow key at the right edge of the border between the Algebra View and the Graphics View, the Algebra View disappears to enlarge the Graphing View. But the point on the line where is still not visible.  We can tap or click on the Graphics View and drag down and to the right until we can see the point .  But the origin is no longer visible. We need to zoom out.    To Zoom out on a touch screen or touch pad, we \"pinch in\".  To Zoom using a mouse, click on the Graphics View, then hold the Shift key and rotate the mouse wheel forward.      x+y=2 translated     Retrieving the Algebra View  To access the Algebra View again, click again on the arrow at the right edge of what had previously been the border between the Graphics View and Algebra View.    Graphing a Function, Making a Table, and Zooming One Axis  To graph an equation of the form , we only need enter the expression in .   Graph the equation for -values between and .    Clear the output history: In the Algebra View (see the Note above if the Algebra View is closed), tap the kebab menu icon (three vertical dots) in any existing history line, and select Delete. (If the menu does not apppear, you may wish to review the Note from the previous section.)  In the input box, enter , then tap the squaring key,   .  The output history shows and the Graphics View shows the parabola.  Tap the kebab menu icon (three vertical dots) in the output history line, and select Table of values.    Function options on Geogebra calculator    Set the Start value for to . Set the End value for to . Set the Step value to , then click OK   Click on the arrow key at the right edge of the border between the Algebra View and the Graphics View to hide the Algebra View and enlarge the Graphing View. Tap on any of the dark dots on the graph to see its coordinates.    We zoom out just enough so that both and are both visible on the -axis. Now we zoom out just the -axis (until is visible) as follows.  On a touch screen, we pinch vertically on the -axis.  On a computer, we move the cursor above the -axis until the cursor looks like a hand. Then holding down the Shift key, we click (the cursor changes again to an arrow pointing up to a horizontal segment), and drag down.    The points and are now visible in the Graphics View.    y-axis zoomed on Geogebra calculator     We can also zoom on just the -axis.  On a touch screen, we pinch horizontally on the -axis.  On a computer, we move the cursor above the -axis until the cursor looks like a hand. Then holding down the Shift key, we click (the cursor changes again to an arrow pointing right to a vertical segment), and drag left or right.     "
},
{
  "id": "example-GGB-basic-graph",
  "level": "2",
  "url": "GGB-Graphing-an-Equation.html#example-GGB-basic-graph",
  "type": "Example",
  "number": "B.3.1",
  "title": "",
  "body": "   Graph the equation .  In the Algebra View, Press    =   .  The output history shows and the Graphics View shows the line passing through the points and . If we click on either of these two points, GeoGebra will show a label and the coordinates.    x+y=2 on Geogebra calculator    "
},
{
  "id": "GGB-Graphing-an-Equation-4-3",
  "level": "2",
  "url": "GGB-Graphing-an-Equation.html#GGB-Graphing-an-Equation-4-3",
  "type": "Example",
  "number": "B.3.2",
  "title": "",
  "body": " Continuing from , drag within the Graphics View so that you can see the point on the graph where . Then zoom out until you can see both that point and the origin.    Solution: If we click on the arrow key at the right edge of the border between the Algebra View and the Graphics View, the Algebra View disappears to enlarge the Graphing View. But the point on the line where is still not visible.  We can tap or click on the Graphics View and drag down and to the right until we can see the point .  But the origin is no longer visible. We need to zoom out.    To Zoom out on a touch screen or touch pad, we \"pinch in\".  To Zoom using a mouse, click on the Graphics View, then hold the Shift key and rotate the mouse wheel forward.      x+y=2 translated    "
},
{
  "id": "note-no-algebra-view",
  "level": "2",
  "url": "GGB-Graphing-an-Equation.html#note-no-algebra-view",
  "type": "Note",
  "number": "B.3.3",
  "title": "Retrieving the Algebra View.",
  "body": "Retrieving the Algebra View  To access the Algebra View again, click again on the arrow at the right edge of what had previously been the border between the Graphics View and Algebra View.  "
},
{
  "id": "GGB-Graphing-an-Equation-5-3",
  "level": "2",
  "url": "GGB-Graphing-an-Equation.html#GGB-Graphing-an-Equation-5-3",
  "type": "Example",
  "number": "B.3.4",
  "title": "",
  "body": " Graph the equation for -values between and .    Clear the output history: In the Algebra View (see the Note above if the Algebra View is closed), tap the kebab menu icon (three vertical dots) in any existing history line, and select Delete. (If the menu does not apppear, you may wish to review the Note from the previous section.)  In the input box, enter , then tap the squaring key,   .  The output history shows and the Graphics View shows the parabola.  Tap the kebab menu icon (three vertical dots) in the output history line, and select Table of values.    Function options on Geogebra calculator    Set the Start value for to . Set the End value for to . Set the Step value to , then click OK   Click on the arrow key at the right edge of the border between the Algebra View and the Graphics View to hide the Algebra View and enlarge the Graphing View. Tap on any of the dark dots on the graph to see its coordinates.    We zoom out just enough so that both and are both visible on the -axis. Now we zoom out just the -axis (until is visible) as follows.  On a touch screen, we pinch vertically on the -axis.  On a computer, we move the cursor above the -axis until the cursor looks like a hand. Then holding down the Shift key, we click (the cursor changes again to an arrow pointing up to a horizontal segment), and drag down.    The points and are now visible in the Graphics View.    y-axis zoomed on Geogebra calculator    "
},
{
  "id": "GGB-more-graphing",
  "level": "1",
  "url": "GGB-more-graphing.html",
  "type": "Section",
  "number": "B.4",
  "title": "More graphing",
  "body": "More graphing  Finding a Suitable Graphing Window  Sometimes the graph of an equation is not visible in the Standard view. The simplest way to modify the graphing window so that at least a part of the graph is visible is to use the Zoom fit option.     Graph the equation   Clear out the output history of any previous graphs, then enter into the input box   The graph is not visible in the standard window, so we will try the Zoom fit command. Right-click on the Graphics View and choose Zoom to fit.    Graphics menu on Geogebra calculator      Graphics menu Geogebra calculator    But if you use the GeoGebra calculator app on a mobile device, tap the options icon that resembles a gear, located in the upper right corner of the Graphics View, and a slightly different menu apears.  There are icons for both a Standard View and a Zoom to fit.    Once you can see part of the graph, you can further adjust the Graphics View by dragging and\/or zooming.    Multiple Graphs and the Intersect Feature  We can display more than one graph at a time. We simply enter multiple equations, pressing after each equation to put it into the calculator output history.  The points where two graphs meet are Special Points, and GeoGebra will give a label and coordinates when we click on an intersection point.  To turn off a graph without deleting its equation, we tap in the colored disk to the left of the equation in the output history. We tap the disk again to turn the graph back on.   Find all the intersection points between the graphs of and .    We enter  to graph the first equation, then , the squaring key, to graph the second equation.  We can minimize the Algebra View and then click on each intersection point to see its coordinates. The two intersection points are and .    Intersection of line and parabola      "
},
{
  "id": "example-zoom-fit",
  "level": "2",
  "url": "GGB-more-graphing.html#example-zoom-fit",
  "type": "Example",
  "number": "B.4.1",
  "title": "",
  "body": "   Graph the equation   Clear out the output history of any previous graphs, then enter into the input box   The graph is not visible in the standard window, so we will try the Zoom fit command. Right-click on the Graphics View and choose Zoom to fit.    Graphics menu on Geogebra calculator      Graphics menu Geogebra calculator    But if you use the GeoGebra calculator app on a mobile device, tap the options icon that resembles a gear, located in the upper right corner of the Graphics View, and a slightly different menu apears.  There are icons for both a Standard View and a Zoom to fit.    Once you can see part of the graph, you can further adjust the Graphics View by dragging and\/or zooming.  "
},
{
  "id": "GGB-more-graphing-3-5",
  "level": "2",
  "url": "GGB-more-graphing.html#GGB-more-graphing-3-5",
  "type": "Example",
  "number": "B.4.2",
  "title": "",
  "body": " Find all the intersection points between the graphs of and .    We enter  to graph the first equation, then , the squaring key, to graph the second equation.  We can minimize the Algebra View and then click on each intersection point to see its coordinates. The two intersection points are and .    Intersection of line and parabola    "
},
{
  "id": "GGB-Regression",
  "level": "1",
  "url": "GGB-Regression.html",
  "type": "Section",
  "number": "B.5",
  "title": "Regression",
  "body": "Regression   GeoGebra calculator ABC keyboard   GeoGebra calculator ABC keyboard     Making a Scatterplot and Finding the Regression Line  We use GeoGebra's FitLine command to produce a regression line.   Make a scatterplot for the points , , , , . Then find the equation of the lease-squares regression line and plot it on top of the scatterplot.    We enter each of the five ordered pairs. The output history will show each labeled with a capital letter, such as .  We do a Zoom to fit: right-click on the Graphics View (or click on the gear icon) and select Zoom to fit.  We next enter the FitLine command: using the ABC keyboard shown above for the letters, the 123 keyboard ( keyboard image ) for the parentheses, and the f(x) keyboard ( keyboard image ) for the list curly braces {}.   Important: We must enter capital letters for the names of the points--GeoGebra is case-sensitive regarding labels.    Scatterplot and best fit line      "
},
{
  "id": "fig-GGB-ABC-keyboard",
  "level": "2",
  "url": "GGB-Regression.html#fig-GGB-ABC-keyboard",
  "type": "Figure",
  "number": "B.5.1",
  "title": "",
  "body": " GeoGebra calculator ABC keyboard   GeoGebra calculator ABC keyboard   "
},
{
  "id": "GGBscatterplot-3",
  "level": "2",
  "url": "GGB-Regression.html#GGBscatterplot-3",
  "type": "Example",
  "number": "B.5.2",
  "title": "",
  "body": " Make a scatterplot for the points , , , , . Then find the equation of the lease-squares regression line and plot it on top of the scatterplot.    We enter each of the five ordered pairs. The output history will show each labeled with a capital letter, such as .  We do a Zoom to fit: right-click on the Graphics View (or click on the gear icon) and select Zoom to fit.  We next enter the FitLine command: using the ABC keyboard shown above for the letters, the 123 keyboard ( keyboard image ) for the parentheses, and the f(x) keyboard ( keyboard image ) for the list curly braces {}.   Important: We must enter capital letters for the names of the points--GeoGebra is case-sensitive regarding labels.    Scatterplot and best fit line    "
},
{
  "id": "GGB-troubleshooting",
  "level": "1",
  "url": "GGB-troubleshooting.html",
  "type": "Section",
  "number": "B.6",
  "title": "Troubleshooting the GeoGebra App",
  "body": "Troubleshooting the GeoGebra App  Common issues and solutions     Issue  Solution     No menu appears after clicking on the kebab menu icon (while using the GeoGebra app embedded in this textbook)    Scroll within the book to the top of the webpage. Click again on the kebab menu icon.      The app has only a graphing window and no input box. (No Algebra View)    Click on the up arrow at the right edge of the blue border on the bottom of the app. (In landscape mode, the border is on the left and the arrow points to the right.)      The graph does not appear even though the equation for the graph is in the history.    Check that the circle next to the equation in the output history is filled with a color if it is not, click on the circle. If the graph is still not visible, adjust the Graphics View as in      The calculator does not give the decimal form of a fraction.    Tap the approximation key as described in      "
},
{
  "id": "GGB-troubleshooting-2",
  "level": "2",
  "url": "GGB-troubleshooting.html#GGB-troubleshooting-2",
  "type": "Figure",
  "number": "B.6.1",
  "title": "",
  "body": "Common issues and solutions     Issue  Solution     No menu appears after clicking on the kebab menu icon (while using the GeoGebra app embedded in this textbook)    Scroll within the book to the top of the webpage. Click again on the kebab menu icon.      The app has only a graphing window and no input box. (No Algebra View)    Click on the up arrow at the right edge of the blue border on the bottom of the app. (In landscape mode, the border is on the left and the arrow points to the right.)      The graph does not appear even though the equation for the graph is in the history.    Check that the circle next to the equation in the output history is filled with a color if it is not, click on the circle. If the graph is still not visible, adjust the Graphics View as in      The calculator does not give the decimal form of a fraction.    Tap the approximation key as described in     "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "Answers to Selected Exercises",
  "body": " Answers to Selected Exercises  "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
