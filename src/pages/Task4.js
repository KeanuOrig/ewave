/*Task 4:
Create a bem object that builds a fully qualified class name using the BEM methodology. The bem
object should have these methods:
● block - adds the "block" part, which is considered the basis of the full class name (e.g. <div
class="block">)
● element - adds an "element" part, which consists of a "block" + "__element" part (e.g. <div
class="block__element">)
● modifier - adds a "modifier" part, which consists of either a "block" + "--modifier" part, or a
"block" + "__element" + "--modifier" (e.g. <div class="block-- modifier"> or <div
class="block__element--modifier">)
● build - returns the full class name from the previously added parts ("block", "element",
"modifier"), after the call, it clears the previously specified parts (if there is no "block" part, an
error message should be shown, and all other parts of the name should be cleared)
Each method (except build) takes as an argument only its part of the fully qualified class name. The
fully qualified class name does not need to have both "element" and "modifier". All methods SHOULD
BE able to be chained like this:
bem.block("list").element("item").modifier("active").build(); // "list__item–active"*/

export default function Task4(){

	const bem = `bem.block("list").element("item").modifier("active").build()`;

	return (
		<>
			<h1>BEM OBJECT</h1>
			<p>{bem}</p>
		</>
	)
}