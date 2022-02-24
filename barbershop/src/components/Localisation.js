import "./Localisation.css"

const Localisation = () => {
    return (
        <div className="contact">
            <div className="contactTitle">Nous Contacter</div>
            <div className="trouver">Où nous trouver</div>
            <div className="contactContainer">
            <div className="contactMap">
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.0076247283537!2d0.8195755158984104!3d48.32193464628134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3b7e67cd96003%3A0x48653d6cfa02ab7a!2sLe%20studio%20coiffeur%20barbier!5e0!3m2!1sfr!2sfr!4v1645627045663!5m2!1sfr!2sfr" width="700" title="map" height="500" loading="lazy">
                    </iframe>
                </div>
            <h2 className="horaires">Adresse</h2>
                <a className="lien" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/40+Rue+Villette+G%C3%A2te,+28400+Nogent-le-Rotrou/@48.3219346,0.8195755,17z/data=!3m1!4b1!4m5!3m4!1s0x47e3b7368ec06975:0x45c180d9b350aa5b!8m2!3d48.3219311!4d0.8217642?hl=fr">
                    <p className="contactAdresse">40 Rue Villette Gâté, 28400, Nogent-le-Rotrou</p>
                </a>
                    <h2 className="horaires">Nos horaires</h2>
                    <div className="jour">          
                    <div>Lundi : Fermé</div>
                    <div>Mardi : 09h/19h</div>
                    <div>Mercredi : 09h/19h</div>
                    <div>Jeudi : 09h/18h30</div>
                    <div>Vendredi : 09h/19h</div>
                    <div>Samedi : 09h/17h</div>
                    <div>Dimanche : Fermé</div>
                    </div>  
                    <h2 className="horaires">Téléphone :</h2>
                <div className="contactNum"> 09 84 36 34 18</div>
        </div>  
        </div>
    )
}

export default Localisation