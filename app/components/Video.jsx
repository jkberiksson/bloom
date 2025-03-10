export default function Video() {
    return (
        <video className='w-full h-full relative object-cover pointer-events-none' autoPlay muted loop preload='auto'>
            <source src='/video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
}
