import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && category == null && category != "letter"]|order(publishedAt desc)[0...100]{
  _id, title, slug, category, publishedAt
}`)

export const RECENT_POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current) && category == null && category != "letter"]|order(publishedAt desc)[0...100]{
  _id, title, slug, category, publishedAt
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, publishedAt
}`)