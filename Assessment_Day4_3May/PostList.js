import react, {Component, useState} from 'react';
import './PostList.css';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error encountered while retrieving response from server');
                }
                return response.json();
            })
            .then(data => this.setState({ list: data, isLoading: false }))
            .catch(error => this.setState({ error: error.message, isLoading: false }));
    }

    render() {
        const { list, isLoading, error } = this.state;
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div>
                <h1>Post List</h1>
                <table className='table'>
                    <tr border="1px solid">
                        <th className='header'>ID</th>
                        <th className='header'>Title</th>
                        <th className='header'>Body</th>
                    </tr>
                    {list.map(list => (                       
                        <tr border="1px solid" whitespace = "wrap">                            
                            <td className='data'>{list.id}</td>    
                            <td className='data'>{list.title}</td>
                            <td className='data'>{list.body}</td>
                        </tr>        
                         
                    ))}
                </table>       
            </div>
        );
    }
}

export default PostList;