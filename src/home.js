function createHome(first,second,third)
{
    buttonFix(first,second,third);
    const home = document.createElement('div');
    const main = document.querySelector('#container');
    home.classList.add('menu')
    main.removeChild(main.lastChild);

    main.appendChild(home);
    displayDescription(home);
    displaySchedules(home);

    return home;

}

function buttonFix(first,second,third)
{

    first.className = 'active';
    second.className = 'btn';
    third.className = 'btn';
}

function displayDescription(home)
{
    const description = document.createElement('div');
    const title = document.createElement('div');
    title.textContent = 'Our Restaurant';
    title.classList.add('title');
    description.textContent ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sodales metus. Nam vel justo scelerisque dolor commodo scelerisque. Donec sagittis orci in posuere porta. Ut lacinia condimentum turpis sed vehicula. Praesent rhoncus massa non felis vestibulum, ut malesuada mi vulputate. Aliquam in diam dignissim, euismod ligula et, malesuada risus. Donec varius enim non felis scelerisque posuere. In vitae orci ante. Integer in nisi tortor. Duis felis urna, varius vitae leo quis, cursus venenatis sem. Praesent ultricies facilisis arcu vitae varius. Nulla facilisi.'
    description.classList.add('home-desc');
    home.appendChild(title);
    home.appendChild(description);
}



function displaySchedules(home)
{
    const schedules = schedulesRest();
    const schedulesContainer = document.createElement('div')
    schedulesContainer.classList.add('sched-container');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Schedules'
    schedulesContainer.appendChild(title);
    const schedOpen = document.createElement('div');
    schedOpen.classList.add('sched-open');
    schedulesContainer.appendChild(schedOpen);

        for(let key in schedules.open)
        {
            const schedDom = document.createElement('div');
            
            schedDom.textContent = schedules.sched[key] +':'+ schedules.open[key] +' - '+ schedules.closed[key];
            schedOpen.appendChild(schedDom);
        }
        home.appendChild(schedulesContainer);

}

function schedulesRest()
{
    const open = [
        '18:00',
        '18:00',
        '18:00',
        '18:00',
        '18:00',
        '20:00',
        'CLOSED',
    ]

    const closed = [
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '02:00',
        '04:00',
        'CLOSED',
    ]
    const sched = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'saturday',
        'Sunday',
    ]


    return{closed,open,sched}
}



export default createHome;