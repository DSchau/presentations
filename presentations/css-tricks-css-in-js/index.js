import Intro from './sections/01-intro.mdx'
import Problems from './sections/02-problems.mdx'
import Libraries from './sections/03-libraries.mdx'
import Drawbacks from './sections/04-drawbacks.mdx'
import Misc from './sections/97-misc.mdx'
import Demo from './sections/98-demo.mdx'
import Conclusion from './sections/99-conclusion.mdx'

export { default as theme } from './theme'

export default [
  ...Intro,
  ...Problems,
  ...Libraries,
  ...Drawbacks,
  ...Misc,
  ...Demo,
  ...Conclusion
]
