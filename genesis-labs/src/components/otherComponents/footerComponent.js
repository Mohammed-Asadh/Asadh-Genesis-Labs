import {Link} from 'react-router-dom';

function Footer() {
return(
<div>
<footer>
<nav>
<ul>
<li><Link to="/contact">Contact Us</Link></li>
<li>
<Link to="/privacypolicy">Privacy Policy</Link>
</li>
<li>
<Link to="/termsandconditions">Terms And Conditions</Link>

</li>
</ul>
</nav>
<p>&copy right GenesisLabs (2024)</p>
</footer>
</div>
);
}

export default Footer;