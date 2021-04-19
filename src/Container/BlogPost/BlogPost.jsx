import React, {Component, Fragment} from 'react';
import Post from '../../Component/Post/Post';
import './BlogPost.css' ;
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost : {
            userId : 1,
            id: 1,
            title: '',
            body:''
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => { 
            this.setState({
                post: result.data
            })
        })
    }

    postToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((result) => {
            console.log(result);
            this.getPostAPI();
            this.setState({
                formBlogPost : {
                    userId : 1,
                    id: 1,
                    title: '',
                    body:''
                }
            })
        }, (eror) => {
            console.log('error : ', eror);
        })
    }

    putToApi = () => {
        axios.put('http://localhost:3004/posts/' + this.state.formBlogPost.id, this.state.formBlogPost)
        .then((result) => {
            console.log(result);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost : {
                    userId : 1,
                    id: 1,
                    title: '',
                    body:''
                }
            })
        })
    }

    handleRemove = (data) => {
        axios.delete('http://localhost:3004/posts/' + data)
        .then(() => {
            this.getPostAPI()
         })
    }

    handleEdit = (data) => {
        console.log(data);
        this.setState({
            formBlogPost : data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let newBlogForm = {...this.state.formBlogPost};
        let newId = new Date().getTime();
        if(!this.state.isUpdate){
            newBlogForm['id'] = newId;
        }
        newBlogForm[event.target.name] = event.target.value;
        this.setState({
            formBlogPost : newBlogForm 
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putToApi();
        }else{
            this.postToAPI();
        }
    }

    componentDidMount(){
        this.getPostAPI();
    }
    
    render(){
         return(
            <Fragment>
                <p className="selection-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Body Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add block content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit} >Save</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post}
                        remove={this.handleRemove} edit={this.handleEdit}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;