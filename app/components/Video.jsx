export default function Video() {
    return (
        <video className='w-full h-full object-cover pointer-events-none' autoPlay muted loop preload='auto'>
            <source src='/movie.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
}
