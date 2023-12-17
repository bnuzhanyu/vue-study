/** api for reviews */

const reviewApi = {

    review_list: null, 

    create_review(id, username, content, semester, create_time, likes, liked, comment_num) {
        return {
            id: id,
            user: {id: id, name: username},
            content: content,
            semester: semester,
            create_time: create_time,
            likes: likes,
            liked: liked,
            comment_num: comment_num
        }
    },

    get_review_list() {
        if (this.review_list == null) {
           this.review_list = [
                this.create_review(1, 'Abby', 'review1', 'Spring 2024', '2023-11-05 13:34:00', 87, false, 2),
                this.create_review(2, 'Bob', 'review2', 'Autumn 2024', '2023-11-06 13:34:00', 99, true, 3),
                this.create_review(3, 'Cindy', 'review3', 'Spring 2024', '2023-11-07 13:34:00', 222, true, 6),
                this.create_review(4, 'David', 'review4', 'Autumn 2024', '2023-11-08 13:34:00', 23, false, 7),
            ]
        }
        return this.review_list
    },


    get_review_detail(id) {
        for (let i = 0; i < this.get_review_list().length; i++) {
            console.log("id:" + i, this.review_list[i])
            if (this.review_list[i].id == id) {
                return this.review_list[i]
            }
        }
        return null
    },

    _create_reply(review_id, ci) {
        return {
            author: 'user' + ci,
            content: 'comment ' + ci + ' of review_id ' + review_id,
            time: '2023-11-30', 
        }
    },

    get_review_replies(review_id) {
        let review = this.get_review_detail(review_id)
        var replies = []
        for (let i = 0; i < review.comment_num; i++) {
            replies.push(this._create_reply(review_id, i + 1))
        }
        return replies
    },

    add_review_comment(review_id, comment) {
        console.log('add comment to review:',  review_id, comment)
    },

};
  
export default reviewApi;