import dayjs from 'dayjs'


export const formatDateRange = ({ from, to }: any) => {
    return `${dayjs(from).format("MMM YYYY")} - ${dayjs(to).format("MMM YYYY")}`

}

export const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}