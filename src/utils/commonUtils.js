import moment from 'moment';

export const formatTitle = title => moment(title).format('ddd DD-MM-YYYY');

export const formatPreviewContent = content => {
    if (content.length <= 250)
        return content;

    return `${content.substring(0, 250)}...`;
};