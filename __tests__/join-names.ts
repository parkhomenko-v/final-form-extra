import joinNames from '../join-names';

describe('joinNames', () => {
  test('parent name is not passed', () => {
    expect(joinNames('', 'child')).toEqual('child');
    expect(joinNames('', 'child.child')).toEqual('child.child');
    expect(joinNames('', '[0]')).toEqual('[0]');
    expect(joinNames('', '[0].child')).toEqual('[0].child');
  });

  test('parent name is passed', () => {
    expect(joinNames('parent', 'child')).toEqual('parent.child');
    expect(joinNames('parent', 'child.child')).toEqual('parent.child.child');
    expect(joinNames('parent.child', 'child')).toEqual('parent.child.child');
    expect(joinNames('parent', '[0]')).toEqual('parent[0]');
    expect(joinNames('parent', '[0].child')).toEqual('parent[0].child');
    expect(joinNames('parent[0]', 'child')).toEqual('parent[0].child');
  });
});
