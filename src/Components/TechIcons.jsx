function TechIcons({ icon: Icon, name }) {
    return (
        <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-inline flex-center overflow-y-hidden gradient-border hover:-translate-y-3 transition-all duration-700 ">
            <Icon />    
        </div>
    )
}
export default TechIcons