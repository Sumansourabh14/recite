![Recite cover with a black gradient background and two quote icons](./images/recite-v1.png)

# Recite

Recite is a FREE and open source API that contains amazing quotes from books (fiction/non-fiction).

## Why I created this API?

I wanted to use quotes from books in my Next.js project just like how Goodreads has so many quotes. But I couldn't find a good API for this. There are various APIs that give famous quotes said by authors or important people but that wasn't satisfying my use case. Hence, I created an API of my own.

## API Root URL

```
https://recite-production.up.railway.app/api/v1
```

## Rate Limit

There is a rate limit of 250 requests per minute. If you exceed the rate limit, the API will respond with a <code>429</code> error.

## API Response Example

```JavaScript
{
  "_id": "65cd071ec2f3eed99da6a22c",
  "quote": "She burned too bright for this world.",
  "book": "Wuthering Heights",
  "author": "Emily Bronte",
  "length": 37,
  "words": 7,
  "createdAt": "2024-02-14T18:31:58.112Z",
  "updatedAt": "2024-02-14T18:31:58.112Z",
  "__v": 0
}
```

## API Reference

- [Recite](#recite)
  - [Why I created this API?](#why-i-created-this-api)
  - [API Root URL](#api-root-url)
  - [Rate Limit](#rate-limit)
  - [API Response Example](#api-response-example)
  - [API Reference](#api-reference)
  - [Get random quote](#get-random-quote)
    - [Response](#response)
  - [Get all quotes](#get-all-quotes)
    - [Response](#response-1)
  - [Search quotes](#search-quotes)
    - [Response](#response-2)
  - [Contribution](#contribution)

## Get random quote

```
GET /random
```

Returns a single random quote.
[Try in your browser](https://recite-production.up.railway.app/api/v1/random)

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
[Try in your browser](https://recite-production.up.railway.app/api/v1/quotes)

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

## Search quotes

```
GET /quotes/search?query=
```

Returns all the relevant quotes that match the search query.
[Try in your browser](https://recite-production.up.railway.app/api/v1/quotes/search?query=life)

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

More info: [Medium article](https://medium.com/@sumsourabh14/introducing-recite-a-free-api-for-book-quotes-138dca77f7da)

[def]: #recite

## Contribution

- Feel free to post any quote by creating an issue for it.
- Want to improve this REST API? Create an issue and contribute!
