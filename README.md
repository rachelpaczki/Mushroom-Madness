# Mushroom Madness!: Toxicity Safety Guide 
### Pattern Prophets Team Members: 
### Lauren Ables-Torres, Berenice Ramos, Rachel Puzycki, Holt Jones

## Project Description: 
This project aims to develop a predictive classification model using different algorithms including Logistic Regression, Random Forest, Neural Networks, and SVM to classify various attributes of mushrooms. Using the Mushroom dataset from UC Irvine Machine Learning Repository, we will focus on predicting the edibility of mushrooms based on features that include cap shape, cap color, odor, habitat, and others.

## Research Questions:
Are certain mushroom characteristics (i.e. cap shape/color, odor, gill size, etc.) that indicate it is more likely that the mushroom is poisonous? 
Which of these characteristics is most notable in determining if a mushroom is poisonous or not?
Can we effectively predict if a mushroom is poisonous based on its outer appearances/textures?
Extra Credit**: Make a chatbox that allows you to know the probability of a mushroom being poisonous based on one of the characteristics.

## Datasets Used: 
For this project we decided to utilize data compiled by the UC Irvine Machine Learning Repository, titled “Mushroom”, indicating different mushroom variables such as poisonous status, cap shape, color, gill size, and odor. All of these variables can allow us to predict different aspects of mushrooms.

## Data Visualization
### Colors of Mushroom Attributes v Toxicity
![cap-color](Images/cap-color.jpg) ![gill-color](Images/gill-color.jpg)
![stalk-color-above-ring](Images/stalk-color-above-ring.jpg) ![stalk-color-below-ring](Images/stalk-color-below-ring.jpg) 
![spore-color](Images/spore-color.jpg)

Color seems like it may be a good indicator for toxicity, but color is not the best indicator for determine toxicity on it's own. There are a few outliers, with gill-color and spore-print-color showing promising indicators for toxicity (i.e. gill-color that is "buff" color is mostly toxic, "spore-print-color" has overall higher indicators).

### Bruising, Odor, and Population Types v. Toxicity
![bruising](Images/bruising.jpg)
![odor](Images/odor.jpg)

On initial inspection, these variables (bruising, odor, and population-types) have a more clear indication that certain variables have a higher likelihood of being toxic. Bruising and odor are perfect examples, with bruising mushrooms likely being edible, and non-bruising being poisonous. The same goes for odor, with foul/negatively-associated odors being poisonous, with no smell being mostly edible.

## Model Visualization
### Random Forest Model
![random-forest](Images/random-forest.jpg)
![image](https://github.com/rachelpaczki/Mushroom-Madness/assets/152629824/2a28f4fe-ef2b-413f-b0bc-d4df83c9b6b4)
A Random Forest algorithm was trained to learn mushroom features and predict edibility or poisonous. 100 decision trees, each comprised of a data point from the training set, were used to train the model with random state equaling 42. There was an accuracy, prediction, and recall of 1.00 with 1257 data points predicting 0, edible, and 1181 data points supporting 1, poisonous. 

### Neutral Networks
![neur-net-1](Images/neutal-networks-1.jpg)
![neur-net-2](Images/neural-networks-2.jpg)
A NeuralNetwork model was used to predict the classification of mushrooms wheteher posinous or edible. In the NeuralNetwork model the accuracy was found to be 1.00 and the loss of 0.0026. The graphs were used to visualize the accuracy and loss with each epoch.

### Linear Regression
![lin-reg-1](Images/linear-regress-1.jpg)
![lin-reg-2](Images/linear-regress-2.jpg)
![lin-reg-3](Images/linear-regress-3.jpg)
(Write Here)

### SVC
![svc1](Images/svc1.jpg)
![svc2](Images/svc2.jpg)
![svc3](Images/svc3.jpg)
(Write Here)

## Challenges/Conclusion
Although this dataset was easy to use, it was made in part to be used to teach students like ourselves different ways of achieving 100% accuracy in our testing. 

In the future, adjusting columns and taking into account more null/outlier indicators will be best. We would also like to create a website which could be more interactive and useful to the public.

License
------------------------
This dataset is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license.
