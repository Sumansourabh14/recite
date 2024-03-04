![Recite cover with a black gradient background and two quote icons](./images/recite-v1.png)

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
    _id: string,
    // the actual quote from the book
    quote: string,
    // name of the book
    book: string,
    // name of the author
    author: string,
    // length of the quote
    length: number,
    // total words in the quote
    words: number,
    // date and time of first published
    createdAt: string,
    // date and time of update (if any)
    updatedAt: string
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
    success: true
    // total number of quotes
    total: number,
    // The array of quotes
    quotes: [
        {
            _id: string,
            // the actual quote from the book
            quote: string,
            // name of the book
            book: string,
            // name of the author
            author: string,
            // length of the quote
            length: number,
            // total words in the quote
            words: number,
            // date and time of first published
            createdAt: string,
            // date and time of update (if any)
            updatedAt: string
        }
    ]  
}
```
[Medium article](https://medium.com/@sumsourabh14/introducing-recite-a-free-api-for-book-quotes-138dca77f7da)
