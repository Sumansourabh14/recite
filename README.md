# Recite

Recite is a FREE and open source API that contains amazing quotes from books (fiction/non-fiction).

## Why I created this API?

I wanted to use quotes from books in my Next.js project just like how Goodreads has so many quotes. But I couldn't find a good API for this. There are various APIs that give famous quotes said by authors or important people but that wasn't satisfying my use case. Hence, I created an API of my own. 

## API Root URL

```
https://recite.onrender.com
```

## API Reference

- [Get random quote](#get-random-quote)
- [Get all quotes](#get-all-quotes)

## Get random quote

```
GET /random/quote
```

Returns a single random quote. 
[Try in your browser](https://recite.onrender.com/random/quote)

### Response

```JavaScript
{
      // the actual quote from the book
      quote: string,
      // name of the book
      book: string,
      // name of the author
      author: string
}
```


## Get all quotes

```
GET /quotes
```

Returns all the quotes. 
[Try in your browser](https://recite.onrender.com/quotes)

### Response

```JavaScript
{
      // total number of quotes
      total: number,
      // The array of quotes
      quotes: [
          {
              // the actual quote from the book
              quote: string,
              // name of the book
              book: string,
              // name of the author
              author: string
          }
      ]  
}
```
