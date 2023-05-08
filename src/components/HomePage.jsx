import React from 'react'
import Navbar from './Navbar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import Logo from '../assets/Logo2.png'


function HomePage() {
  return (
<div className='HomePage'>
    <div className='navBar'>
        <Navbar/>
    </div>
 <div className='cards'>
<div class="card">
<img src={Logo} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A third item</li>
</ul>

</div>
<div class="card">
<img src={Logo} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A third item</li>
</ul>

</div>
<div class="card">
<img src={Logo} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A third item</li>
</ul>

</div>
</div>       

</div>
  )
}

export default HomePage