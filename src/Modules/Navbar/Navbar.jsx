import 'materialize-css/dist/css/materialize.min.css';
import './Navbar.css';

function Navbar() {
    return(
   <div className="container-fluid Navbar">
<div className="row">
<div className="col title">
        ConsumerRights.pk
    </div>
    <div className="col s3 m2 l3">
        Home
    </div>
    <div className="col s3 m2 l2">
        Complaints
    </div>
    <div className="col s3 m2 l2">
        Blog
    </div>
    <div className="col s3 m2 l2">
        About us
    </div>
</div>
   </div>
    );
}
export default Navbar;