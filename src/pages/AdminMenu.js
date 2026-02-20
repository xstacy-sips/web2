import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  clearMenuData,
  getDefaultMenuData,
  loadMenuData,
  saveMenuData
} from '../data/menuData';
import './AdminMenu.css';

const cloneData = (data) => JSON.parse(JSON.stringify(data));

const AdminMenu = () => {
  const location = useLocation();
  const isAllowed = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('key') === 'test';
  }, [location.search]);

  const [menuData, setMenuData] = useState(() => loadMenuData());
  const [status, setStatus] = useState('');

  useEffect(() => {
    saveMenuData(menuData);
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    if (!status) {
      setStatus('Auto-saved.');
    }
  }, [menuData]);

  const handleCategoryChange = (categoryKey, field, value) => {
    setMenuData((prev) => {
      const next = cloneData(prev);
      next[categoryKey][field] = value;
      return next;
    });
  };

  const handleItemChange = (categoryKey, index, field, value) => {
    setMenuData((prev) => {
      const next = cloneData(prev);
      next[categoryKey].items[index][field] = value;
      return next;
    });
  };

  const handleBadgesChange = (categoryKey, index, value) => {
    const badges = value
      .split(',')
      .map((badge) => badge.trim())
      .filter(Boolean);
    handleItemChange(categoryKey, index, 'badges', badges);
  };

  const handleSave = () => {
    saveMenuData(menuData);
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    setStatus('Saved. Changes are live on the Menu page.');
  };

  const handleReset = () => {
    clearMenuData();
    setMenuData(getDefaultMenuData());
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    setStatus('Reset to default menu.');
  };

  if (!isAllowed) {
    return (
      <div className="admin-page">
        <div className="admin-card">
          <h2>Access denied</h2>
          <p>Use the link with the correct key to open this page.</p>
          <p className="admin-hint">Example: /admin?key=test</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Menu Admin</h1>
          <p>Update prices, mark items out of stock, and edit descriptions.</p>
        </div>
        <div className="admin-actions">
          <button
            type="button"
            className="btn-outline"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(menuData, null, 2));
              setStatus('Copied JSON to clipboard.');
            }}
          >
            Copy JSON
          </button>
          <button type="button" className="btn-outline" onClick={handleReset}>
            Reset Defaults
          </button>
          <button type="button" className="btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>

      {status && <div className="admin-status">{status}</div>}

      <div className="admin-actions admin-actions-bar">
        <button
          type="button"
          className="btn-outline"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(menuData, null, 2));
            setStatus('Copied JSON to clipboard.');
          }}
        >
          Copy JSON
        </button>
        <button type="button" className="btn-outline" onClick={handleReset}>
          Reset Defaults
        </button>
        <button type="button" className="btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      <div className="admin-content">
        {Object.entries(menuData).map(([categoryKey, category]) => (
          <section key={categoryKey} className="admin-category">
            <div className="admin-category-header">
              <h2>{category.title}</h2>
              <span className="admin-category-key">{categoryKey}</span>
            </div>

            <div className="admin-category-fields">
              <label>
                Title
                <input
                  type="text"
                  value={category.title || ''}
                  onChange={(event) =>
                    handleCategoryChange(categoryKey, 'title', event.target.value)
                  }
                />
              </label>
              <label>
                Subtitle
                <input
                  type="text"
                  value={category.subtitle || ''}
                  onChange={(event) =>
                    handleCategoryChange(categoryKey, 'subtitle', event.target.value)
                  }
                />
              </label>
              <label>
                Note
                <input
                  type="text"
                  value={category.note || ''}
                  onChange={(event) =>
                    handleCategoryChange(categoryKey, 'note', event.target.value)
                  }
                />
              </label>
            </div>

            <div className="admin-items">
              {category.items.map((item, index) => (
                <div key={`${categoryKey}-${item.name}-${index}`} className="admin-item">
                  <div className="admin-item-top">
                    <label>
                      Name
                      <input
                        type="text"
                        value={item.name || ''}
                        onChange={(event) =>
                          handleItemChange(categoryKey, index, 'name', event.target.value)
                        }
                      />
                    </label>
                    <label>
                      Out of stock
                      <input
                        type="checkbox"
                        checked={Boolean(item.outOfStock)}
                        onChange={(event) =>
                          handleItemChange(categoryKey, index, 'outOfStock', event.target.checked)
                        }
                      />
                    </label>
                  </div>

                  <label>
                    Description
                    <textarea
                      rows="2"
                      value={item.description || ''}
                      onChange={(event) =>
                        handleItemChange(categoryKey, index, 'description', event.target.value)
                      }
                    />
                  </label>

                  <div className="admin-item-grid">
                    <label>
                      Price (Regular)
                      <input
                        type="text"
                        value={item.price || ''}
                        onChange={(event) =>
                          handleItemChange(categoryKey, index, 'price', event.target.value)
                        }
                      />
                    </label>
                    <label>
                      Price (Mini)
                      <input
                        type="text"
                        value={item.priceSmall || ''}
                        onChange={(event) =>
                          handleItemChange(categoryKey, index, 'priceSmall', event.target.value)
                        }
                      />
                    </label>
                    <label>
                      Badges (comma separated)
                      <input
                        type="text"
                        value={(item.badges || []).join(', ')}
                        onChange={(event) =>
                          handleBadgesChange(categoryKey, index, event.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="admin-actions admin-actions-footer">
        <button
          type="button"
          className="btn-outline"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(menuData, null, 2));
            setStatus('Copied JSON to clipboard.');
          }}
        >
          Copy JSON
        </button>
        <button type="button" className="btn-outline" onClick={handleReset}>
          Reset Defaults
        </button>
        <button type="button" className="btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminMenu;
