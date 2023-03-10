import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleOnSubmit = e => {
    const { search } = this.state;
    e.preventDefault();
    if (search.trim() === '') {
      toast.info('Nothing selected!');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(search);
    this.reset();
  };
  reset() {
    this.setState({ search: '' });
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { search } = this.state;
    const { handleOnSubmit, handleChange } = this;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleOnSubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <AiOutlineSearch className={css.SearchBtnIcon} />
          </button>

          <input
            className={css.SearchForm__input}
            type="text"
            name="search"
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
