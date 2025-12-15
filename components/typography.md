---
title: Typography
layout: base
date: 2019-04-23
---

# Typography
This page describes the various typographic features you can include on your pages. For images, please see the [image guide](images).

As you scroll through the examples, you'll see the typographic feature embedded on the page, and just below a gray box that will show exactly what code to copy and paste into your page.


## Headings
It's useful to divide even small pages into clear sections with informative section headings. Longer pages may need several levels of headings. You can easily create headings by using the `#` character in front of your headings. A single `#` is the largest, for top-level headings, `##` gives you a slightly smaller heading, etc. The code in the box below produces the headers and text just below it.

``` markdown
## Second-level heading
You can see the font size is a little smaller than the top-level heading at the top of the page.

### Third-level heading
And this one is a little smaller...

#### Fourth-level heading
Etc...

```


## Second-level heading
You can see the font size is a little smaller than the top-level heading at the top of the page.

### Third-level heading
And this one is a little smaller...

#### Fourth-level heading
Etc...



---


## Pull Quotes
Even relatively short essays benefit from pull quotes. As the name suggests, the idea is to "pull" a quote outside the main flow of the text to highlight it. You can specify if you want it on the left or right side.

```
{%raw%}{%
include aside.html
class="left"
width="50%"
text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque."
%}{%endraw%}
```


{% 
include aside.html
class="left" 
width="50%"
text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque." 
%}

Here is text that's part of the main body of the essay (or whatever). It naturally flows around the pull quote. Below is some dummy text just to take up space. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.


---

### Block quotes
Extended quotations from another source tend to get lost in the text, or be too large for the pull quote format. For those cases, you can use a blockquote to highlight a particularly juicy quotation. Just start your quote with a greater-than sign as shown below. 

```
> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.
```

Here is some regular text in the flow of the page. 

> Here is my very interesting quote. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.

And back to the regular text.

---


## Footnotes
All good history essays show what their sources are, which helps readers get a sense of the research that underlies the essay and establishes credability and trustworthiness (or not, if the sources are not very reliable). Our footnotes, are not really footnotes, but pop-ups from little buttons that look like little numbers in a circle.[^example] To get a footnote to show up, there are two steps:

[^example]: Here's an example note

1) put `[^somename]` in your essay where you want the superscript number to appear, and change `somename` to some unique signifier related to the content of the note. In your markdown file, your text will look like:

```
Here's a sample sentence with a footnote at the end.[^source] 
```

2) After that paragraph (but it could be anywhere), put `[^somename]: Your footnote text`.

```
[^somename]: Your footnote text
```

So, the following code produces the output seen just below it.

```
Here's a sample sentence with a footnote at the end.[^source] 

Here is yet another sentence.[^another-source]  Note that the numbering happens automagically, so you don't need to think about that.

[^source]: Your first footnote text
[^another-source]: Text for your second footnote.
```

Here's a sample sentence with a footnote at the end.[^source] 

Here is yet another sentence.[^another-source]  Note that the numbering happens automagically, so you don't need to think about that.

[^source]: Your first footnote text
[^another-source]: Text for your second footnote.
