import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from './newsContent.module.css'

export default function NewsContent({nAContent}) {
  return (
  <article className={styles.richtext}>
    {documentToReactComponents(nAContent)}
  </article>
  )
}
