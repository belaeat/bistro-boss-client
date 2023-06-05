import service from '../../../assets/home/chef-service.jpg'

const Service = () => {
    return (
        <div className='relative my-24'>
            <img src={service} alt="" />
            <div className='absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center p-16'>
                <h3 className='font-semibold text-5xl mb-8 uppercase'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                <p></p>
            </div>
        </div>
    );
};

export default Service;