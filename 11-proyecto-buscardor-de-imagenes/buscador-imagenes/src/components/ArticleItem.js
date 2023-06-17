const ArticleItem = ({ photo }) => {
  const open = url => window.open(url)
  
  return (
    <article onClick={() => open(photo.links.html)}>
      <img src={photo.urls.regular} alt={photo.description} />
      <p>
        {photo.description == null && photo.alt_description == null ?
          "There is not description for this picture" :
          photo.description == null ? 
            photo.alt_description[0].toUpperCase() + photo.alt_description.substring(1) : 
            photo.alt_description == null ? 
              photo.description[0].toUpperCase() + photo.description.substring(1) : 
              [photo.description[0].toUpperCase() + photo.description.substring(1), photo.alt_description[0].toUpperCase() + photo.alt_description.substring(1)].join(' - ')
        } 
      </p>
    </article>
  )
}

export default ArticleItem
