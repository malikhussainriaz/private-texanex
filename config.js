<script type="module">
import config from "https://cdn.jsdelivr.net/gh/malikhussainriaz/private-texanex@main/config.js";

if (config.use_cdn === true) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/gh/malikhussainriaz/private-texanex@main/main.css";
  document.head.appendChild(link);
}
</script>
