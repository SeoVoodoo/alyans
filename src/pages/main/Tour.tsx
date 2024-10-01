

export const Tour = () => {
    return (
        <div>
          Страница 3Д - тур
          <iframe
                src="/virtual_tour/tour.html"
                frameBorder="0"
                scrolling="no"
                style={{ display: 'block', margin: '0 auto' }}
                width="100%"
                height="650"
                title="Тур"
            ></iframe>
        </div>
    );
};
