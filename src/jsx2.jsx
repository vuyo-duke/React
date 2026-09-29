
import { useRef } from "react";

const sectionRef = useRef(null);
<section ref={sectionRef}>
  {/* Section content */}
</section>

console.log(sectionRef)